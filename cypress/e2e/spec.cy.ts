describe('My First Test', () => {
  it('should handle users integration', () => {
    cy.visit('http://localhost:5173/#/users')

    cy.get('[name="username"]').type('username')
    cy.get('[name="password"]').type('password')
    cy.contains('Sign in').click()

    cy.contains('Leanne Graham').click()
    cy.contains('Bret').should('exist')
  })
})
