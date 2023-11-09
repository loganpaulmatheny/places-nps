describe("Errors", () => {
  it("A user should be notified when there's an error on the server side", () => {
    cy.intercept(
      "GET",
      `https://developer.nps.gov/api/v1/parks?limit=550&q=national%20park&api_key=${process.env.REACT_APP_API_KEY}`,
      {
        statusCode: 500,
        body: "error",
      }
    ).as("getParksData");

    cy.visit("http://localhost:3000").wait("@getParksData");
  });
});
