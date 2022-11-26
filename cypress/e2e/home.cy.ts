describe("Home", () => {
  before(() => {
    cy.visit("/");
  });
  it("should toggle theme", () => {
    cy.get("[data-cy=theme-toggle-button]").click();
    cy.get("[data-cy=home-body]").should("have.class", "dark");
    cy.get("[data-cy=theme-toggle-button]").click();
    cy.get("[data-cy=home-body]").should("have.class", "light");
  });
});
