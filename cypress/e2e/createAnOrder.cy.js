import homePage from '../support/pages/HomePage'
import loginPage from '../support/pages/LoginPage'
import { faker } from '@faker-js/faker'
import { searchProduct } from '../support/helpers/helperSearchProduct'
import checkout from '../fixtures/checkout.json'
import user from '../fixtures/user.json'
import orderPage from '../support/pages/OrderPage'

checkout.country = faker.location.country();
checkout.userName = faker.person.fullName();
checkout.phone = faker.phone.number('##########')
checkout.zipCode = faker.location.zipCode('#####');
checkout.address = faker.location.streetAddress();
checkout.city = faker.location.city();
checkout.state = faker.location.state();
checkout.cardNumber = faker.finance.creditCardNumber('################')


describe('Create an Order', () => {

    before(() => {
        homePage.visit();
        homePage.getWelcomeBanner().click();
        homePage.getAccountButton().click();
        homePage.getLoginButton().click();
        loginPage.submitLoginForm(user.email, user.password);
    })

    it('Search product and checkout order', () => {

        searchProduct(checkout.productName)

        orderPage.getButtonBasket().click();
        orderPage.getButtonCheckout().click();

        orderPage.getButtonAddress().click()
        orderPage.getCountryField().type(checkout.country);
        orderPage.getNameField().type(checkout.userName);
        orderPage.getPhoneField().type(checkout.phone);
        orderPage.getZipCodeField().type(checkout.zipCode);
        orderPage.getAddressField().type(checkout.address);
        orderPage.getCityField().type(checkout.city);
        orderPage.getStateField().click();
        orderPage.getButtonSubmit().click();

        orderPage.getSelectAddress(checkout.userName).click()
        orderPage.getButtonPaymentSelection().click()
        orderPage.getChooseDeliveryMethod(checkout.delivery).click()
        orderPage.getButtonDeliveryMethod().click();

        orderPage.submitPaymentForm(checkout.userName, checkout.cardNumber, checkout.cardMonth, checkout.cardYear);

        orderPage.getButtonCheckout().click();
        orderPage.messageSuccesOrder();
       
    })


})

