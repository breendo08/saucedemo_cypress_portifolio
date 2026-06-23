describe('Login', () => {
  it('Logout', () => {
    //Arrange
    cy.visit('https://www.saucedemo.com/')

    //Act
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    //Assert
    cy.get('#react-burger-menu-btn').click()
    cy.get('[data-test="logout-sidebar-link"]').click()
    cy.url().should('eq','https://www.saucedemo.com/')
  })
})