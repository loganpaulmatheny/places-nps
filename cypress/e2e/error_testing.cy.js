describe("Errors", () => {
  it("A user should be notified when there's an error on the server side", () => {
    cy.intercept(
      "GET",
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
      `https://developer.nps.gov/api/v1/parks?limit=550&q=national%20park&api_key=${Cypress.env(
        "REACT_APP_API_KEY"
      )}`,
      {
        statusCode: 200,
        fixture: "parks.json",
      }
    ).as("getParksDataSuccess");

    cy.visit("http://localhost:3000")
      .wait("@getParksDataSuccess")
      .get(".card:first")
      .find("h2")
      .should("contain", "Acadia National Park");
  });

  it("A different type of server side error", () => {
    cy.intercept(
      "GET",
      `https://developer.nps.gov/api/v1/parks?limit=550&q=national%20park&api_key=${Cypress.env(
        "REACT_APP_API_KEY"
      )}`,
      {
        statusCode: 429,
        body: "error",
      }
    ).as("getParksData");

    cy.visit("http://localhost:3000")
      .wait("@getParksData")
      .get(".error-message")
      .should(
        "contain",
        "The trail is closed for the season, check back in the warmer months!"
      )
      .get(".error-image")
      .should("have.attr", "src")
      .and("include", `${"/compass.png"}`);
  });

  it("Should be able to handle a bad route and link back to the home page", () => {
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

    cy.visit("http://localhost:3000/testing")
      .get("h1")
      .should("contain", "Oops, looks like you might need to check the map")
      .get(".error-image")
      .should("have.attr", "src")
      .and("include", `${"/map.png"}`)
      .get(".back-button")
      .click()
      .get(".parks-container")
      .find(".card")
      .should("have.length", 4);
  });
});
