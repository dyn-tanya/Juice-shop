class RegisterPage {
    getEmailField() {
        return cy.get('#emailControl');
    }

    getPasswordField() {
        return cy.get('#passwordControl');
    }

    getRepeatePasswordField() {
        return cy.get('#repeatPasswordControl');
    }

    getSecurityQuestionSelect() {
        return cy.get('#mat-select-2')
    }

    getSecurityQuestionListBox() {
        return cy.get('#mat-select-2-panel')
    }

    getSecurityAnswerField() {
        return cy.get('#securityAnswerControl')
    }

    getSubmitRegisterButton() {
        return cy.get('#registerButton')
    }

    messageRegistrationSucsess() {
        cy.get('.mat-simple-snack-bar-content')
            .should('contain', 'Registration completed successfully. You can now log in.')
        return this;
    }

    messageEmptyEmail() {
        return cy.contains('Please provide an email address.');
    }

    messageEmptyPassword() {
        return cy.contains('Please provide a password.')
    }

    messageEmptyRepeatPassword() {
        return cy.contains('Please repeat your password.');
    }

    getPasswordCheckbox() {
        return cy.get('.mat-slide-toggle-thumb');
    }

    messageSecurityQuestion() {
        return cy.contains(' Please provide an answer to your security question.')
    }

    messageInvalidEmail() {
        return cy.contains('Email address is not valid.')
    }

    messageInvalidPassword() {
        return cy.contains('Password must be 5-40 characters long.')
    }

    messageInvalidRepeatPassword() {
        return cy.contains('Passwords do not match')
    }
}

export default new RegisterPage();