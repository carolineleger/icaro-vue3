import AboutSection from "../components/AboutSection.vue";

describe("<AboutSection />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(AboutSection);
  });
});
