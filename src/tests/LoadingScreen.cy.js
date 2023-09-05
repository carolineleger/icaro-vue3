import LoadingScreen from "../components/LoadingScreen.vue";

describe("<LoadingScreen />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(LoadingScreen);
  });
});
