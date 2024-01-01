export class MyInfoPage {

static navigateToMyInfo() {
    cy.contains("My Info").click();
    cy.document().should('have.property', 'readyState', 'complete'); //verify page is fully loaded
}

static verifyBirthDateisFilled() {
    cy.get('div.oxd-date-input')
      .eq(1) .should('exist') .and('not.be.empty'); 
}

static clickSaveBtn() {
    cy.get('button[type="submit"]').should("be.visible").click();
    cy.log("Save button clicked");

  }

}