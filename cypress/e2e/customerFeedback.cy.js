import feedBackPage from '../support/pages/FeedBackPage'
import homePage from '../support/pages/HomePage';
import { captchaResult } from '../support/helpers/CaptchaFunction'
import user from '../fixtures/user.json'

describe('Feedback form', () => {

    it('Filling out the feedback form', () => {

        feedBackPage.visit();
        homePage.getWelcomeBanner().click();
        feedBackPage.getCommentField().type(user.commentUser)
        feedBackPage.getSlider();

        captchaResult();
        
        feedBackPage.getSubmitButton().click();
        feedBackPage.getSuccessFeedbackMessage();
    })

})





