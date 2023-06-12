import user from '../fixtures/user.json'
import homePage from '../support/pages/HomePage'
import registerPage from '../support/pages/RegisterPage'
import loginPage from '../support/pages/LoginPage'
import { faker } from '@faker-js/faker'

user.email = faker.internet.email();
user.password = faker.internet.password({ length: 10 });
user.invalidEmail = faker.internet.displayName();
user.invalidPassword = faker.internet.password({ length: 3 });


describe('Registration', () => {

  beforeEach(() => {
    homePage.visit();
    homePage.getWelcomeBanner().click();
    homePage.getAccountButton().click();
    homePage.getLoginButton().click();
    loginPage.getLinkSignUp().click();
  })


  it('Filling in all required fields', () => {

    registerPage.getEmailField().type(user.email);
    registerPage.getPasswordField().type(user.password);
    registerPage.getRepeatePasswordField().type(user.password);

    registerPage.getSecurityQuestionSelect().click();
    registerPage.getSecurityQuestionListBox().contains(user.securityQuestion).click();
    registerPage.getSecurityAnswerField().type(user.answer);

    registerPage.getSubmitRegisterButton().click();
    registerPage.messageRegistrationSucsess();
  })

  it('Errors for empty fields', () => {

    registerPage.getEmailField().click();
    registerPage.getPasswordField().click();

    registerPage.messageEmptyEmail().should('be.visible');
    registerPage.getRepeatePasswordField().click();
    registerPage.messageEmptyPassword().should('be.visible')

    registerPage.getSecurityAnswerField().click()
    registerPage.messageEmptyRepeatPassword().should('be.visible')
    registerPage.getPasswordCheckbox().click();

    registerPage.messageSecurityQuestion().should('be.visible');
    registerPage.getSubmitRegisterButton().should('be.disabled');

  })

  it('Input of invalid values', () => {

    registerPage.getEmailField().type(user.invalidEmail)
    registerPage.getPasswordField().type(user.invalidPassword)
    registerPage.getRepeatePasswordField().type(user.password);

    registerPage.messageInvalidEmail().should('be.visible')
    registerPage.messageInvalidPassword().should('be.visible')

    registerPage.getPasswordCheckbox().click()
    registerPage.messageInvalidRepeatPassword().should('be.visible')

    registerPage.getSubmitRegisterButton().should('be.disabled');
  })



})


