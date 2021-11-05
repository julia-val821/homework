import BasePage from './basePage';

class RegistrationPage extends BasePage {
    get languageSubmit () { return $('#languageSubmit')}
    get btnLogin () { return $('.btn-login')}
    get btnCreate () { return $('.col-md-7 .btn-primary')}
    get inputZipCode () { return $('.container-fluid #txtZipCode')}
    get btnZipCode () { return $('.container-fluid #btnSearchZipcode')}
    get btnStylist () { return $ ('[data-role="use-distributor"]')}
    get inputFirstName () { return $('#Customer_FirstName')}
    get inputLastName () { return $('#Customer_LastName')}
    get inputEmail () { return $('#Customer_Email') }
    get inputUserName () { return $('#Customer_LoginName')}
    get inputPassword () { return $('#Password') }
    get inputConfirmPassword () { return $('#ConfirmPassword')}
    get recaptcha () { return $('.recaptcha-checkbox-border') }
    get btnSubmit () { return $('#submit')}
    get notification () { return $('.toast-message')}

    async registrationPart1 (zipCode) {
        await this.languageSubmit.click();
        await this.btnLogin.click();
        await this.btnCreate.click();
        await this.inputZipCode.setValue(zipCode);
        await this.btnZipCode.click();
    }

    async registrationPart2 (firstName, lastName, email, username, password, confirmPassword) {
        await this.btnStylist.click();
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputEmail.setValue(email);
        await this.inputUserName.setValue(username);
        await this.inputPassword.setValue(password);
        await this.inputConfirmPassword.setValue(confirmPassword);
        await this.recaptcha.click();
        await this.btnSubmit.click();
    }

    open() {
        return super.open('/');
    }
}

export default new RegistrationPage();
