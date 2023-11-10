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
    cy.visit("http://localhost:3000")
      .wait("@getRequest")
      .get("img")
      .should("have.attr", "src")
      .and("include", `${"/logo.png"}`)
      .get("button")
      .should("contain", "Home")
      .get("button")
      .should("contain", "Visited")
      .get(".card:first")
      .get("h2")
      .should("contain", "Acadia National Park")
      .get(".card:first")
      .find("div")
      .should("have.css", "background-image")
      .and(
        "include",
        `https://www.nps.gov/common/uploads/structured_data/3C7B45AE-1DD8-B71B-0B7EE131C7DFC2F5.jpg`
      )
      .get(".card:first")
      .find(".arrow-icon")
      .should("have.attr", "src")
      .and("include", `${"/arrow.png"}`)
      .get(".parks-container")
      .as("parent")
      .get("@parent")
      .find(".card")
      .as("child")
      .get("@child")
      .should("have.length", 4);

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
