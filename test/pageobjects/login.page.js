import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get buttonSubmit () { return $('.ant-btn'); }
    get errorToast () { return $('.ant-notification-notice-message');}
    get loginValidatorError () { return $('//div[contains(@class,"ant-form-item-with-help")][.//input[@id="normal_login_email"]]//div[@role="alert"]');}

    setLogin(email){
        this.inputUsername.setValue(email);
    }

    setPassword(password){
        this.inputPassword.setValue(password);
    }

    clickSubmitButton(){
        this.buttonSubmit.click();
    }

    submitButtonIsDisabled(){
        expect(this.buttonSubmit).toBeDisabled();
    }

    errorToastAppeared(){
        expect(this.errorToast).toBeDisplayed();
    }

    emptyLoginInput(){
        this.clearInput(this.inputUsername);
    }


    loginRequiredError(){
        expect(this.loginValidatorError).toBeDisplayed();
        expect(this.loginValidatorError.getText()).toEqual('Required');
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

export default new LoginPage();
