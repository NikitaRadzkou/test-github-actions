import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

When('Write cypress.visit', () => {
  cy.visit('https://yandex.by/')
})

Then('Verify opended site', () => {
  cy.url().should('include', 'yandex')
})
