import user from '../fixtures/user.json'
import homePage from '../support/pages/HomePage'
import loginPage from '../support/pages/LoginPage'
import searchPage from '../support/pages/SearchPage'
import { faker } from '@faker-js/faker'

user.invalidEmail = faker.internet.userName();
user.invalidPassword = faker.internet.password({ length: 3 });
user.newPassword = faker.internet.password({ length: 10 });

describe('Autorization', () => {

    beforeEach(() => {
        homePage.visit();
        homePage.getWelcomeBanner().click();
        homePage.getAccountButton().click();
        homePage.getLoginButton().click();
    })

    it('Enter valid email and password', () => {
        loginPage.submitLoginForm(user.email, user.password);
        searchPage.successLogin();
    })

    it('Errors for empty fields', () => {
        loginPage.getEmailField().click();
        loginPage.getPasswordField().click();
        loginPage.getSubmitButton().click({ force: true }).should('be.disabled')
        loginPage.errorMessageEmptyEmail().should('be.visible');
        loginPage.errorMessageEmptyPassword().should('be.visible');
    })

    it('Invalid email', () => {
        loginPage.submitLoginForm(user.invalidEmail, user.password);
        loginPage.errorInvalidEmailOrPassword().should('be.visible');
    })

    it('Invalid password', () => {
        loginPage.submitLoginForm(user.email, user.invalidPassword);
        loginPage.errorInvalidEmailOrPassword().should('be.visible');
    })

    it('Invalid email and password', () => {
        loginPage.submitLoginForm(user.invalidEmail, user.invalidPassword);
        loginPage.errorInvalidEmailOrPassword().should('be.visible');
    })

    it('Forgot password', () => {
        loginPage.getLinkFogotPassword().click({ force: true });
        loginPage.submitFogotPasswordForm(user.emailForgotPassword, user.answerFogotPassword, user.newPassword)
        loginPage.messagePasswordChanged().should('be.visible');
    })


})