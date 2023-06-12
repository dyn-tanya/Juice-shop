class LoginPage {

    getEmailField() {
        return cy.get('#email');
    }
    getPasswordField() {
        return cy.get('#password');
    }
    getSubmitButton() {
        return cy.get('#loginButton');
    }

    submitLoginForm(email, password) {
        cy.log(`Auth user with email: ${email} and password: ${password}`);
        this.getEmailField().type(email);
        this.getPasswordField().type(password);
        this.getSubmitButton().click();
    }

    errorMessageEmptyEmail() {
        return cy.contains('Please provide an email address.');
    }

    errorMessageEmptyPassword() {
        return cy.contains('Please provide a password.');
    }

    errorInvalidEmailOrPassword() {
        return cy.contains('Invalid email or password.');
    }

    getLinkFogotPassword() {
        return cy.get('[routerlink="/forgot-password"]');
    }

    getSecurityAnswerField() {
        return cy.get('#securityAnswer');
    }

    getNewPasswordField() {
        return cy.get('#newPassword');
    }

    getNewPasswordRepeatField() {
        return cy.get('#newPasswordRepeat');
    }

    getSubmitResetButton() {
        return cy.get('#resetButton');
    }

    submitFogotPasswordForm(email, answer, password) {
        cy.log(`Fogot password with use email: ${email} and password: ${password}`);
        this.getEmailField().type(email);
        this.getSecurityAnswerField().type(answer);
        this.getNewPasswordField().type(password);
        this.getNewPasswordRepeatField().type(password);
        this.getSubmitResetButton().click();
    }

    messagePasswordChanged() {
        return cy.contains(' Your password was successfully changed.')
    }

    getLinkSignUp() {
        cy.log('Open User Registration From')
        return cy.get('[routerlink="/register"]');
    }
}


export default new LoginPage();