import ClientsSection from "../components/ClientsSection.vue";

describe("<ClientsSection />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ClientsSection);
  });
});
