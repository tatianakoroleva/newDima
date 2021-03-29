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

    setLogin(email){
        this.inputUsername.setValue(email);
    }

    setPassword(password){
        this.inputPassword.setValue(password);
    }

    clickSubmitButton(){
        this.buttonSubmit.click();
    }


    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

export default new LoginPage();
