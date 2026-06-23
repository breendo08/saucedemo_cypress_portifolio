describe('Produto', () => {
  it('Adcionar protudo no carrinho', () => {
    //Arrange
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    
    //Act
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-badge"]').should('be.visible').and('have.text','1')
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('José')
    cy.get('[data-test="lastName"]').type('Silva')
    cy.get('[data-test="postalCode"]').type('70000000')
    cy.get('[data-test="continue"]').click()

    //Assert
    cy.get('[data-test="finish"]').click()
    cy.contains('Thank you for your order!').should('be.visible')

  })
})