describe('template spec', () => {
  it('passes', () => {
    // Visit the running next server
    cy.visit('http://localhost:3000')

    // Type the value and then check if the results were shown
    cy.get('[data-cy="tons-input"]').type(20)
    cy.get('[data-cy="tons-submit"]').click()

    // If the second item is visible, it means that the distribution went successful
    cy.get('[data-cy="credits-i1"]').should('be.visible')
  })
})