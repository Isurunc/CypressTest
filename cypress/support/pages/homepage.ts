import { MENU_RENDERING_TIME, VERY_SHORT_TIME } from "../timeouts";

export class HomePage {

     static logout() {
      cy.get('ul[class="oxd-dropdown-menu"]').children("li").eq(3).click();
    }

    static navigateToUserProfile() {
      cy.wait(MENU_RENDERING_TIME);
      cy.get(".oxd-userdropdown-tab > .oxd-icon").click();
    }

    static verifyUserLoggedOut() {
       cy.get(".oxd-text--h5").should("have.text", "Login");
    }

   
}



