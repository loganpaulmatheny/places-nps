describe("Errors", () => {
  it("A user should be notified when there's an error on the server side", () => {
    cy.intercept(
      "GET",
      // `https://developer.nps.gov/api/v1/parks?limit=550&q=national%20park&api_key=${process.env.REACT_APP_API_KEY}`,
      `https://developer.nps.gov/api/v1/parks?limit=550&q=national%20park&api_key=${Cypress.env(
        "REACT_APP_API_KEY"
      )}`,
      {
        statusCode: 500,
        body: "error",
      }
    ).as("getParksData");

    cy.visit("http://localhost:3000")
      .wait("@getParksData")
      .get(".error-message")
      .should(
        "contain",
        "Looks like the compass might be broken, please try again later!"
      )
      .get(".error-image")
      .should("have.attr", "src")
      .and("include", `${"/compass.png"}`);
  });

  it("A user should be notified when there's an error on the server side and be able to navigate home", () => {
    cy.intercept(
      "GET",
      // `https://developer.nps.gov/api/v1/parks?limit=550&q=national%20park&api_key=${process.env.REACT_APP_API_KEY}`,
      `https://developer.nps.gov/api/v1/parks?limit=550&q=national%20park&api_key=${Cypress.env(
        "REACT_APP_API_KEY"
      )}`,
      {
        statusCode: 500,
        body: "error",
      }
    ).as("getParksDataError");

    cy.visit("http://localhost:3000").wait("@getParksDataError");

    cy.intercept(
      "GET",
      // `https://developer.nps.gov/api/v1/parks?limit=550&q=national%20park&api_key=${process.env.REACT_APP_API_KEY}`,
      `https://developer.nps.gov/api/v1/parks?limit=550&q=national%20park&api_key=${Cypress.env(
        "REACT_APP_API_KEY"
      )}`,
      {
        statusCode: 200,
        fixture: "parks.json",
      }
    )
      .as("getParksDataSuccess")
      .get(".back-button")
      .click();
    cy.visit("http://localhost:3000")
      .wait("@getParksDataSuccess")
      .get(".card:first")
      .find("h2")
      .should("contain", "Acadia National Park");
  });

  it("A different type of server side error", () => {
    cy.intercept(
      "GET",
      // `https://developer.nps.gov/api/v1/parks?limit=550&q=national%20park&api_key=${process.env.REACT_APP_API_KEY}`,
      `https://developer.nps.gov/api/v1/parks?limit=550&q=national%20park&api_key=${Cypress.env(
        "REACT_APP_API_KEY"
      )}`,
      {
        statusCode: 429,
        body: "error",
      }
    ).as("getParksData");

    cy.visit("http://localhost:3000").wait("@getParksData");
  });
});
