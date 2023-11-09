describe("Testing the initial load of the page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      `https://developer.nps.gov/api/v1/parks?limit=550&q=national%20park&api_key=${Cypress.env(
        "REACT_APP_API_KEY"
      )}`,
      {
        statusCode: 200,
        fixture: "parks.json",
      }
    ).as("getRequest");
  });

  it("Should display the correct things on load", () => {
    cy.visit("http://localhost:3000").wait("@getRequest");
    cy.get("img").should("have.attr", "src").and("include", `${"/logo.png"}`);
    cy.get("button").should("contain", "Home");
    cy.get("button").should("contain", "Visited");

    // Log the intercepted request
    // cy.get("@getRequest").then((interception) => {
    //   console.log("Intercepted Request:", interception);
    // });

    // Log the content of the fixture
    // cy.fixture("parks.json").then((fixtureContent) => {
    //   console.log("Fixture Content:", fixtureContent);
    // });
  });
});
