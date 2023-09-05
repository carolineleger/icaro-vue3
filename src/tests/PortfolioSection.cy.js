import PortfolioSection from "../components/PortfolioSection.vue";

describe("<PortfolioSection />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(PortfolioSection);
  });
});
