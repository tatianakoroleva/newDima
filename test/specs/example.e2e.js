import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    beforeEach( () => {
        LoginPage.open();
    });

    it.skip('user logs in with valid data', () => {
        LoginPage.setLogin('mowas64100@astarmax.com');
        LoginPage.setPassword('t1875456');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it.skip('submit button is disabled when the fields left empty', () => {
        LoginPage.submitButtonIsDisabled();
    });

    it.skip('fails if invalid data provided', () => {
        LoginPage.setLogin('example@example.com');
        LoginPage.setPassword('hkjhkhkjdh');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    });

    it.skip('invalid password toast message', () => {
       LoginPage.setLogin('mowas64100@astarmax.com');
        LoginPage.setPassword('hkjhkhkjdh');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    });

    it.skip('invalid email error toast message', () => {
        LoginPage.setLogin('example@example.com');
        LoginPage.setPassword('t1875456');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    });

    it('login page is required', () => {
        LoginPage.setLogin('example');
        LoginPage.emptyLoginInput();
        LoginPage.loginRequiredError();
    })

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });
});


