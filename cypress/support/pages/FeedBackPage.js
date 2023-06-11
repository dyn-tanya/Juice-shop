class FeedBackPage {
    visit() {
        cy.log('Open website FeedBack page');
        cy.visit('#/contact');
    }

    getCommentField() {
        return cy.get('#comment')
    }

    getSlider() {
        return cy.get('#rating')
    }

    getSubmitButton() {
        return cy.get('#submitButton')
    }

    getSuccessFeedbackMessage() {
        return cy.contains('Thank you for your feedback.').should('be.visible')
    }
}

export default new FeedBackPage();