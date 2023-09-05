import FooterSection from "../components/FooterSection.vue";

describe("<FooterSection />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(FooterSection);
  });
});
