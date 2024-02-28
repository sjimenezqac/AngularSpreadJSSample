describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.title().should('equal','Some title')
    cy.contains('app is running!')
  })
})
