import {Login} from '../pages/Login'

const loginPage = new Login();
const userPassword = loginPage.loginPassword;
const largePassword = loginPage.largePAsswordText;

fixture`Login Fixture`
    .page`https://demo-v2.grip.tools/login`;


// positive scenarios

test('Login with a valid email format', async t => {
    for (let i = 0; i < loginPage.validUserEmails.length; i++) {
        await loginPage.setEmailField(loginPage.validUserEmails[i]);
        await loginPage.clickNextButton();
        await loginPage.setPasswordField(userPassword);
        await loginPage.clickLoginButton();
        await loginPage.validateElementAppearWithSpecificText(loginPage.errorMessage, "Invalid email or password");
    }
});

test('Login with a valid email format that contains domain ip address', async t => {
    for (let i = 0; i < loginPage.emailsWithDomainIp.length; i++) {
        await loginPage.setEmailField(loginPage.emailsWithDomainIp[i]);
        await loginPage.clickNextButton();
        await loginPage.setPasswordField(userPassword);
        await loginPage.clickLoginButton();
        await loginPage.validateElementAppearWithSpecificText(loginPage.errorMessage, "Invalid email or password");
    }
});

test('Login with valid email and very large password', async t => {
    await loginPage.setEmailField(loginPage.validUserEmails[0]);
    await loginPage.clickNextButton();
    await loginPage.setPasswordField(largePassword);
    await loginPage.clickLoginButton();
    await loginPage.validateElementAppearWithSpecificText(loginPage.errorMessage, "Invalid email or password");
});

// negative scenarios

test('Login with empty email field (contains white spaces only)', async t => {
    await loginPage.setEmailField(" ");
    await loginPage.checkNextButtonIsDisabled();
});


test('Login with valid email and empty password field', async t => {
    await loginPage.setEmailField(loginPage.validUserEmails[0]);
    await loginPage.clickNextButton();
    await loginPage.checkLoginButtonIsDisabled();
});

test('Login with invalid email format', async t => {
    for (let i = 0; i < loginPage.invalidUserEmails.length; i++) {
        await loginPage.setEmailField(loginPage.invalidUserEmails[i]);
        await loginPage.validateElementAppearWithSpecificText(loginPage.invalidEmailFormatErrorMessage, "Invalid email address");
    }
});

test('Login with invalid email that contains non english characters', async t => {
    await loginPage.setEmailField(loginPage.foriegnCharactersEmail);
    await loginPage.checkNextButtonIsDisabled();
    await loginPage.validateElementAppearWithSpecificText(loginPage.invalidEmailFormatErrorMessage, "Invalid email address");
});

test('Login with invalid email that contains XSS injection', async t => {
    await loginPage.setEmailField(loginPage.Xss);
    await loginPage.checkNextButtonIsDisabled();
    await loginPage.validateElementAppearWithSpecificText(loginPage.invalidEmailFormatErrorMessage, "Invalid email address");
});

test('Login with invalid email that contains SQL injection', async t => {
    await loginPage.setEmailField(loginPage.sqlInjection);
    await loginPage.checkNextButtonIsDisabled();
    await loginPage.validateElementAppearWithSpecificText(loginPage.invalidEmailFormatErrorMessage, "Invalid email address");
});

// forgot password scenarios

test('Check forgot password when user enter a valid email format', async t => {
    for (let i = 0; i < loginPage.validUserEmails.length; i++) {
        await loginPage.setEmailField(loginPage.validUserEmails[i]);
        await loginPage.clickNextButton();
        await loginPage.clickOnForgetPasswordLabel();
        await loginPage.checkTextFieldContainsText(loginPage.emailField, loginPage.validUserEmails[i]);
        await loginPage.clickOnSendLinkButton();
        await loginPage.validateElementAppearWithSpecificText(loginPage.forgotPasswordMessage, "If we find a corresponding account to the email you have specified, we will send you a password reset email shortly.");
        await loginPage.clickOnBackToLoginArrow();
    }
});

test('Check forgot password when user enter an invalid email format', async t => {
    for (let i = 0; i < loginPage.validUserEmails.length; i++) {
        await loginPage.setEmailField(loginPage.validUserEmails[i]);
        await loginPage.clickNextButton();
        await loginPage.clickOnForgetPasswordLabel();
        await loginPage.checkTextFieldContainsText(loginPage.emailField, loginPage.validUserEmails[i]);
        await loginPage.setEmailField(loginPage.invalidUserEmails[i]);
        await loginPage.checkSendLinkButtonIsDisabled();
        await loginPage.validateElementAppearWithSpecificText(loginPage.invalidEmailFormatErrorMessage, "Invalid email address");
        await loginPage.clickOnBackToLoginArrow();
    }
});

// sign up page

test('Validate Sign up button redirect to request demo page', async t => {
    await loginPage.clickOnSignUpButton();
    await loginPage.validateElementAppearWithSpecificText(loginPage.requestAdemoPageTitle, "Request a demo");
});

