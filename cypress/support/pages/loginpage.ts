import { VERY_SHORT_TIME } from "../timeouts";


export class LoginPage {

    static navigate() {  
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
  
    
    static enterCredentialsAndLogin() {
        cy.get('input[name="username"]').type(Cypress.env("Username"));
        cy.get('input[name="password"]').type(Cypress.env("Password"));
        cy.get('button[type="submit"]').click();
        cy.wait(VERY_SHORT_TIME.timeout);
        cy.log("User logged in successfully");
    }
  
    static verifyLogin() {
     cy.url().should('include', '/dashboard');
     cy.get('span[class="oxd-topbar-header-breadcrumb"]').should("have.text", "Dashboard");
    }
   
}

