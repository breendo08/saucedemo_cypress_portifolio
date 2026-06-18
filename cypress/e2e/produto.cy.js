describe('Produto', () => {
  it('Adcionar protudo no carrinho', () => {
    //Arrange
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    //Act
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    
    //Assert
    cy.get('[data-test="shopping-cart-badge"]').should('be.visible').and('have.text','1')

    cy.get('[data-test="shopping-cart-link"]').click()
    cy.contains('Sauce Labs Backpack').should('be.visible')
  })
  it('Remover protudo do carrinho', () => {
    //Arrange
    cy.visit('https://www.saucedemo.com/')

    //Act
    
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()

    //Assert
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.contains('Sauce Labs Backpack').should('not.exist')

  })
})