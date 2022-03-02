import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

// When('I write cypress.visit', () => {
//   cy.visit('https://www.google.com/')
// })

// Then('Browser opened page google.com', () => {
//   cy.url().should('eq', 'https://www.google.com/')
// })

When('Write cypress.visit', () => {
  cy.visit(
    'https://www.npmjs.com/package/cypress-cucumber-preprocessor#get-started'
  )
})

Then('Site opended', value => {
  cy.url().should('include', 'cypress-cucumber-preprocessor')
})

// Given('Open browser', () => {
//   When('I write cypress.visit', () => {
//     cy.visit('https://www.google.com/')
//   })

//   Then('Browser opened page google.com', () => {
//     cy.url().should('eq', 'https://www.google.com/')
//   })
// })

// And('Type yandex in input', () => {
//   When('I write cypress.type', () => {
//     cy.get('div.a4bIc > input').type('yandex {enter}')
//   })

//   Then('Browser shows all results yandex', () => {
//     cy.url().should('contain', 'yandex')
//   })
// })
