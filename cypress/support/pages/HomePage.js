class HomePage {
    visit() {
        cy.log('Open website home page');
        cy.visit('/');
    }

    getWelcomeBanner() {
        cy.log('Close banner Welcome to OWASP Juice Shop!')
        return cy.get('[aria-label="Close Welcome Banner"]');
    }

    getAccountButton() {
        return cy.get('#navbarAccount');
    }

    getLoginButton() {
        cy.log('Open Login Form')
        return cy.get('#navbarLoginButton');
    }
}


export default new HomePage();