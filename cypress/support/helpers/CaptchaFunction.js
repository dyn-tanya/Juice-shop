export function captchaResult() {

    cy.get('#captcha').invoke('text').then((result) => {
       
        cy.log('Сalculation of the equation in the captcha')
        let parseResult = eval(result)
        cy.get('#captchaControl').type(parseResult)
    })

}
