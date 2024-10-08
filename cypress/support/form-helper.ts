const baseUrl: string = Cypress.config().baseUrl

export const testInputStatus = (field: string, error?: string): void => {
  cy.getByTestId(`${field}-wrap`).should('have.attr', 'data-status', error ? 'invalid' : 'valid')
  const attr = `${error ? '' : 'not.'}have.attr`
  cy.getByTestId(field).should(attr, 'title', error)
  cy.getByTestId(`${field}-label`).should(attr, 'title', error)
}

export const testMainError = (error: string): void => {
  cy.getByTestId('spinner').should('not.exist')
  cy.getByTestId('main-error').should('contain.text', error)
}

export const testUrl = (path: string): void => {
  cy.url().should('eq', `${baseUrl.replace(/\/$/, '')}${path}`)
}

export const testLocalStorageItem = (key: string): void => {
  cy.window().then((window: Window) => {
    assert.isOk(window.localStorage.getItem(key));
  });
}