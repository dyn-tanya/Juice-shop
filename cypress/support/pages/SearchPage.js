class SearchPage {
    successLogin() {
        cy.log('Success autorization and go to search page ')
        cy.url().should('include', '/#/search')
        cy.contains('Your Basket').should('be.visible');
        return this
    }
}

export default new SearchPage();