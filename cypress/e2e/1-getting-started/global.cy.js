/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("icaro", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:8080");
  });
  it("has CV", () => {
    // https://on.cypress.io/type
    cy.get(".cy-CV").should("have.attr", "href", "CV.pdf");
  });

  it("displays 15 logos", () => {
    cy.get(".logo-wrapper .logo").children().should("have.length", 15);
  });

  it("has right email", () => {
    // https://on.cypress.io/type
    cy.get(".mail-container").should(
      "have.attr",
      "href",
      "mailto:caroline@icaro-designs.com"
    );
  });

  it("has right number", () => {
    // https://on.cypress.io/type
    cy.get(".phone-number").should("have.attr", "href", "tel:0421433621");
  });
});
