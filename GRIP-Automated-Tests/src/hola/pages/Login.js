import {Hola} from "../utilities/hola";
import XPathSelector from '../utilities/xpath-selector';
import {t} from 'testcafe';

export class Login {

    constructor() {
        //Import Objects and Test Data

        this.holaManager = new Hola();
        this.validUserEmails = this.holaManager.TestData.validEmailsList;
        this.invalidUserEmails = this.holaManager.TestData.invalidEmailsList;
        this.emailField = this.holaManager.ObjectIdentifiers.loginPage.emailTextField;
        this.passwordField = this.holaManager.ObjectIdentifiers.loginPage.passwordTextField;
        this.signinButton = this.holaManager.ObjectIdentifiers.loginPage.loginButton;
        this.nxtButton = this.holaManager.ObjectIdentifiers.loginPage.nextButton;
        this.errorMessage = this.holaManager.ObjectIdentifiers.loginPage.errorMessageLabel;
        this.forgotPassword = this.holaManager.ObjectIdentifiers.loginPage.forgotYourPasswordLabel;
        this.sendLink = this.holaManager.ObjectIdentifiers.loginPage.sendLinkButton;
        this.disableSendLink = this.holaManager.ObjectIdentifiers.loginPage.disabledSendLinkButton;
        this.backToLogin = this.holaManager.ObjectIdentifiers.loginPage.backToLoginArrow;
        this.forgotPasswordMessage = this.holaManager.ObjectIdentifiers.loginPage.forgotPasswordSuccessMessage;
        this.disabledButton = this.holaManager.ObjectIdentifiers.loginPage.disabledLoginButton;
        this.invalidEmailFormatErrorMessage = this.holaManager.ObjectIdentifiers.loginPage.invalidEmailErrorMessage;
        this.disabledNext = this.holaManager.ObjectIdentifiers.loginPage.disabledNextButton;
        this.loginPassword = this.holaManager.TestData.userPassword;
        this.foriegnCharactersEmail = this.holaManager.TestData.emailWithForeignLanguage;
        this.emailsWithDomainIp = this.holaManager.TestData.validEmailListWithDomainIp;
        this.largePAsswordText = this.holaManager.TestData.largePassword;
        this.Xss = this.holaManager.TestData.XssAlertScript;
        this.sqlInjection = this.holaManager.TestData.sqlInjectionText;
        this.signUp = this.holaManager.ObjectIdentifiers.loginPage.signUpButton;
        this.requestAdemoPageTitle = this.holaManager.ObjectIdentifiers.loginPage.requestDemoTitle;
    }

    async checkNextButtonIsDisabled() {
        await t
            .expect(XPathSelector(this.disabledNext).hasAttribute('disabled')).ok();
    }

    async checkLoginButtonIsDisabled() {
        await t
            .expect(XPathSelector(this.disabledButton).hasAttribute('disabled')).ok();
    }

    async validateElementAppearWithSpecificText(errorMessageLocator, errorMessage) {
        await t
            .expect(XPathSelector(errorMessageLocator).exists).ok()
            .expect(XPathSelector(errorMessageLocator).innerText).eql(errorMessage);
    }

    async setEmailField(email) {
        await t
            .click(XPathSelector(this.emailField))
            .typeText(XPathSelector(this.emailField), email, {replace: true})
            .pressKey('tab');
    }

    async setPasswordField(password) {
        await t
            .typeText(XPathSelector(this.passwordField), password, {replace: true});
    }

    async clickNextButton() {
        await t
            .click(XPathSelector(this.nxtButton))
    }

    async clickLoginButton() {
        await t
            .click(XPathSelector(this.signinButton))
    }

    async clickOnForgetPasswordLabel() {
        await t
            .click(XPathSelector(this.forgotPassword));
    }

    async clickOnSendLinkButton() {
        await t
            .click(XPathSelector(this.sendLink));
    }

    async clickOnBackToLoginArrow() {
        await t
            .click(XPathSelector(this.backToLogin));
    }

    async checkTextFieldContainsText(locator, text){
        await t
            .expect(XPathSelector(locator).exists).ok()
            .expect(XPathSelector(locator).value).eql(text);
    }

    async checkSendLinkButtonIsDisabled() {
        await t
            .expect(XPathSelector(this.disableSendLink).hasAttribute('disabled')).ok();
    }

    async clickOnSignUpButton() {
        await t
            .click(XPathSelector(this.signUp))
    }


}
