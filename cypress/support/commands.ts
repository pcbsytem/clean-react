import "@testing-library/cypress/add-commands";
Cypress.Commands.add("getByTestId", (id) => cy.get(`[data-testid=${id}]`))