describe('Login', () => {
  it('Login com credenciais válidas', () => {
    //Arrange
    cy.visit('https://www.saucedemo.com/')

    //Act
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    //Assert
    cy.url().should('eq','https://www.saucedemo.com/inventory.html')
  })
    it('Login com credenciais inválidas', () => {
    //Arrange
    cy.visit('https://www.saucedemo.com/')

    //Act
    cy.get('[data-test="username"]').type('usuario_invalido')
    cy.get('[data-test="password"]').type('senha123')
    cy.get('[data-test="login-button"]').click()

    //Assert
    cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service')
    })
    it('Login com usuário bloqueado', () => {
    //Arrange
    cy.visit('https://www.saucedemo.com/')

    //Act
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    //Assert
    cy.get('[data-test="error"]').should('contain.text','Epic sadface: Sorry, this user has been locked out.')
    })
})
