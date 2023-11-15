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
      .get(".card:first")
      .find(".visit-icon")
      .should("have.attr", "src")
      .and("include", `${"/toVisit.png"}`)
      .get(".parks-container")
      .as("parent")
      .get("@parent")
      .find(".card")
      .as("child")
      .get("@child")
      .should("have.length", 4)
      .get(".card")
      .eq(3)
      .find("h2")
      .should("contain", "Big Bend National Park")
      .get(".card")
      .eq(3)
      .find("div")
      .should("have.css", "background-image")
      .and(
        "include",
        `https://www.nps.gov/common/uploads/structured_data/8BF8356B-BB63-76A4-19F5296EF94C96B4.jpg`
      )
      .get(".card")
      .eq(3)
      .find(".arrow-icon")
      .should("have.attr", "src")
      .and("include", `${"/arrow.png"}`)
      .get(".card")
      .eq(3)
      .find(".visit-icon")
      .should("have.attr", "src")
      .and("include", `${"/toVisit.png"}`);
  });
  it("Should be able to navigate to different areas of the app as well as use the arrows", () => {
    cy.visit("http://localhost:3000")
      .wait("@getRequest")
      .get("button")
      .eq(1)
      .click()
      .get("h2")
      .should(
        "contain",
        "Looks like you haven't visited any parks, it's time to hit the trail!"
      )
      .get("img")
      .eq(1)
      .should("have.attr", "src")
      .and("include", `${"/indiana.png"}`)
      .get("button")
      .eq(0)
      .click()
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
      .get(".card:first")
      .find(".visit-icon")
      .should("have.attr", "src")
      .and("include", `${"/toVisit.png"}`)
      .get(".parks-container")
      .as("parent")
      .get("@parent")
      .find(".card")
      .as("child")
      .get("@child")
      .should("have.length", 4)
      .get(".card")
      .eq(3)
      .get("h2")
      .should("contain", "Big Bend National Park")
      .get(".card")
      .eq(3)
      .find("div")
      .should("have.css", "background-image")
      .and(
        "include",
        `https://www.nps.gov/common/uploads/structured_data/8BF8356B-BB63-76A4-19F5296EF94C96B4.jpg`
      )
      .get(".card")
      .eq(3)
      .find(".arrow-icon")
      .should("have.attr", "src")
      .and("include", `${"/arrow.png"}`)
      .get(".card")
      .eq(3)
      .find(".visit-icon")
      .should("have.attr", "src")
      .and("include", `${"/toVisit.png"}`);
  });

  it("Should be able to mark parks to visit / unvisit that persists across the application ", () => {
    cy.visit("http://localhost:3000")
      .wait("@getRequest")
      .get(".visit-icon")
      .eq(0)
      .click()
      .get(".visit-icon")
      .eq(0)
      .should("have.attr", "src")
      .and("include", `${"/visited.png"}`)
      .get(".visit-icon")
      .eq(0)
      .click()
      .get(".visit-icon")
      .eq(0)
      .should("have.attr", "src")
      .and("include", `${"/toVisit.png"}`)
      .get(".visit-icon")
      .eq(0)
      .click()
      .get(".visit-icon")
      .eq(1)
      .click()
      .get("button")
      .eq(1)
      .click()
      .get(".parks-container")
      .as("parent")
      .get("@parent")
      .find(".card")
      .as("child")
      .get("@child")
      .should("have.length", 2)
      .get(".card:first")
      .find("h2")
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
      .get(".card:first")
      .find(".visit-icon")
      .should("have.attr", "src")
      .and("include", `${"/visited.png"}`)
      .get(".card")
      .eq(1)
      .find("h2")
      .should("contain", "Arches National Park")
      .get(".card")
      .eq(1)
      .find("div")
      .should("have.css", "background-image")
      .and(
        "include",
        `https://www.nps.gov/common/uploads/structured_data/473F5463-F0D2-261D-CEF5FCB39363590B.jpg`
      )
      .get(".card")
      .eq(1)
      .find(".arrow-icon")
      .should("have.attr", "src")
      .and("include", `${"/arrow.png"}`)
      .get(".card:first")
      .find(".visit-icon")
      .should("have.attr", "src")
      .and("include", `${"/visited.png"}`)
      // BREAK
      .get(".visit-icon")
      .eq(0)
      .click()
      .get(".card")
      .find("h2")
      .should("contain", "Arches National Park")
      .get(".parks-container")
      .as("parent")
      .get("@parent")
      .find(".card")
      .as("child")
      .get("@child")
      .should("have.length", 1)
      .get(".arrow-icon")
      .click()
      // BREAK
      .get(".title")
      .should("contain", "Arches National Park")
      .get(".visit-icon-blowup")
      .should("have.attr", "src")
      .and("include", `${"/visited.png"}`)
      .get(".park-image-container")
      .find(".blow-up-image")
      .should("have.attr", "src")
      .and(
        "include",
        `${"https://www.nps.gov/common/uploads/structured_data/473F5463-F0D2-261D-CEF5FCB39363590B.jpg"}`
      )
      .get(".park-image-container")
      .find(".blow-up-image")
      .eq(1)
      .should("have.attr", "src")
      .and(
        "include",
        `${"https://www.nps.gov/common/uploads/structured_data/3C79931C-1DD8-B71B-0BF201E3DB540D04.jpg"}`
      )
      .get(".park-image-container")
      .find(".blow-up-image")
      .eq(2)
      .should("have.attr", "src")
      .and(
        "include",
        `${"https://www.nps.gov/common/uploads/structured_data/3C7A0B2B-1DD8-B71B-0BE0E26B0740AA6B.jpg"}`
      )
      .get(".park-image-container")
      .find(".blow-up-image")
      .eq(3)
      .should("have.attr", "src")
      .and(
        "include",
        `${"https://www.nps.gov/common/uploads/structured_data/3C7A0C49-1DD8-B71B-0B460D58D6E83B40.jpg"}`
      )
      .get(".park-image-container")
      .find(".blow-up-image")
      .eq(4)
      .should("have.attr", "src")
      .and(
        "include",
        `${"https://www.nps.gov/common/uploads/structured_data/3C7A0DE5-1DD8-B71B-0BFBE720788EF4A3.jpg"}`
      )
      .get(".details-container")
      .find("h2")
      .should("contain", "Description")
      .get(".details-container")
      .find("p")
      .should(
        "contain",
        "Discover a landscape of contrasting colors, land forms, and textures unlike any other. The park has over 2,000 natural stone arches, hundreds of soaring pinnacles, massive rock fins, and giant balanced rocks. This red-rock wonderland will amaze you with its formations, refresh you with its trails, and inspire you with its sunsets."
      )
      .get(".details-container")
      .find("p")
      .should(
        "contain",
        "Address: 5 miles north of Moab, Utah, on US 191 Moab, UT 84532"
      )
      .get(".details-container")
      .find("a")
      .should(
        "have.attr",
        "href",
        "http://www.nps.gov/arch/planyourvisit/directions.htm"
      )
      .should("contain", "Directions")
      .get(".visit-icon-blowup")
      .click()
      .get(".visit-icon-blowup")
      .should("have.attr", "src")
      .and("include", `${"/toVisit.png"}`)
      .get("button")
      .eq(1)
      .click()
      .get("h2")
      .should(
        "contain",
        "Looks like you haven't visited any parks, it's time to hit the trail!"
      )
      .get("img")
      .eq(1)
      .should("have.attr", "src")
      .and("include", `${"/indiana.png"}`)
      .get(".back-button")
      .click()
      .wait("@getRequest")
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
      .get(".card:first")
      .find(".visit-icon")
      .should("have.attr", "src")
      .and("include", `${"/toVisit.png"}`)
      .get(".parks-container")
      .as("parent")
      .get("@parent")
      .find(".card")
      .as("child")
      .get("@child")
      .should("have.length", 4)
      .get(".card")
      .eq(3)
      .get("h2")
      .should("contain", "Big Bend National Park")
      .get(".card")
      .eq(3)
      .find("div")
      .should("have.css", "background-image")
      .and(
        "include",
        `https://www.nps.gov/common/uploads/structured_data/8BF8356B-BB63-76A4-19F5296EF94C96B4.jpg`
      )
      .get(".card")
      .eq(3)
      .find(".arrow-icon")
      .should("have.attr", "src")
      .and("include", `${"/arrow.png"}`)
      .get(".card")
      .eq(3)
      .find(".visit-icon")
      .should("have.attr", "src")
      .and("include", `${"/toVisit.png"}`);
  });

  it("Should have proper url routing throughout the app", () => {
    cy.visit("http://localhost:3000")
      .wait("@getRequest")
      .get(".nav-button")
      .contains("Visited")
      .click()
      .url()
      .should("eq", "http://localhost:3000/visit")
      .get(".back-button")
      .click()
      .wait("@getRequest")
      .get(".parks-container")
      .get(".card:first")
      .find(".arrow-icon")
      .click()
      .url()
      .should(
        "eq",
        "http://localhost:3000/park/6DA17C86-088E-4B4D-B862-7C1BD5CF236B"
      );
  });
});
