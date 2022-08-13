/// <reference types="Cypress"/>

describe('Home Page Test', () => {
   beforeEach(() => {
      cy.visit('/')
   })

   it('successfully renders home page', () => {
      cy.contains('Zaloguj się')
   })

   it('renders home page logo image', () => {
      cy.get('[data-cy="home-logo"]')
         .find('img')
         .should('have.attr', 'src', '/assets/home_logo/Mega.png')
   })
})
