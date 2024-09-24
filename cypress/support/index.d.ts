/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit google page
     * @example cy.google()
     */
    getByTestId(id: string): Chainable<JQuery<HTMLElement>>;
  }
}