import { HomePage } from "../support/pages/homepage";
import { LoginPage } from "../support/pages/loginpage";
import { MyInfoPage } from "../support/pages/myinfopage";

describe('OrangeHRM User functions', () => {

    before(() => {
        cy.clearAllSessionStorage();
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
      });


    it('Test Case 1: Login Page - Authenticate Successfully', () => {
        cy.visit(Cypress.env("loginURL"));
        LoginPage.enterCredentialsAndLogin();
        LoginPage.verifyLogin();
    });

    it('Test Case 2: My Info', () => {
        MyInfoPage.navigateToMyInfo();
        MyInfoPage.verifyBirthDateisFilled();
    });

    it('Test Case 3: Logout', () => {
       HomePage.navigateToUserProfile();
       HomePage.logout();
       HomePage.verifyUserLoggedOut();
    });


  });
  