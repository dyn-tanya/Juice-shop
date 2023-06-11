export function searchProduct(productName) {

    cy.log('Search product on home page');
    cy.get('.item-name').then((result) => {

        if (result.text().includes(productName)) {
            cy.get(`.mat-grid-tile-content:contains(${productName})`).within(()=>{
                cy.contains('Add to Basket').click();
            })

        }
        else {
            cy.log(`${productName} not found`)
        }

    })
  
}
