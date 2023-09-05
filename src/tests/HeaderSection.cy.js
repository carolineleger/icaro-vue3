import HeaderSection from "../components/HeaderSection.vue";

describe("<HeaderSection />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(HeaderSection);
  });
});
