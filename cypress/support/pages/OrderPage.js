class OrderPage {

    getButtonBasket() {
        return cy.get('[routerlink="/basket"]');       
    }

    productVisible(productName){
        return cy.contains(productName).should('be.visible');
    }
    getButtonCheckout() {
        return cy.get('#checkoutButton', {timeout:500})   
         
    }

    getButtonAddress() {
        cy.log('Filling out the form "Add New Address"')
        return cy.get('[routerlink="/address/create"]')
    }

    getCountryField() {
        return cy.get('#mat-input-3');
    }

    getNameField() {
        return cy.get('#mat-input-4')
    }

    getPhoneField() {
        return cy.get('#mat-input-5')
    }

    getZipCodeField() {
        return cy.get('#mat-input-6')
    }

    getAddressField() {
        return cy.get('#address')
    }

    getCityField() {
        return cy.get('#mat-input-8')
    }

    getStateField() {
        return cy.get('#mat-input-9')
    }

    getButtonSubmit() {
        return cy.get('#submitButton')
    }

    getSelectAddress(userName) {
        return cy.get('[class="mat-row cdk-row ng-star-inserted"]').contains(userName)
    }

    getButtonPaymentSelection() {
        return cy.get('button[aria-label="Proceed to payment selection"]')
    }

    getChooseDeliveryMethod(delivery) {
        return cy.contains(delivery)
    }

    getButtonDeliveryMethod() {
        return cy.get('[aria-label="Proceed to delivery method selection"]')
    }

    getAddNewCart() {
        return cy.get('[aria-controls="cdk-accordion-child-0"]')
    }

    getNameFieldCard() {
        return cy.get('#mat-input-10')
    }

    getCardNumberField() {
        return cy.get('#mat-input-11')
    }

    getMonthCard() {
        return cy.get('#mat-input-12')
    }

    getYearCard() {
        return cy.get('#mat-input-13')
    }

    getCheckAddress() {
        return cy.get('mat-row .mat-radio-label')
    }

    getButtonProccedRewiew() {
        return cy.get('[aria-label="Proceed to review"]')
    }

    submitPaymentForm(name, cardNumber, cardMonth, cardYear) {
        cy.log('Filling out the Payment form')
        this.getAddNewCart().click();
        this.getNameFieldCard().type(name);
        this.getCardNumberField().type(cardNumber);
        this.getMonthCard().select(cardMonth);
        this.getYearCard().select(cardYear);
        this.getButtonSubmit().click()
        this.getCheckAddress().last().click()
        this.getButtonProccedRewiew().click();
    }

    messageSuccesOrder() {
        return cy.get('h1[class="confirmation"]').should('contain', 'Thank you for your purchase!')
    }

}

export default new OrderPage();