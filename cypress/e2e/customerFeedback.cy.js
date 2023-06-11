import feedBackPage from '../support/pages/FeedBackPage'
import HomePage from '../support/pages/HomePage';
import { captchaResult } from '../support/pages/CaptchaFunction'
import user from '../fixtures/user.json'

describe('Feedback form', () => {

    it('Filling out the feedback form', () => {

        feedBackPage.visit();
        HomePage.getWelcomeBanner().click();
        feedBackPage.getCommentField().type(user.commentUser)

        feedBackPage.getSlider().click()
        
        captchaResult();
        
        feedBackPage.getSubmitButton().click();
        feedBackPage.getSuccessFeedbackMessage();

    })

})





