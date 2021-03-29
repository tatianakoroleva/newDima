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

    it('fails if invalid data provided', () => {
        LoginPage.setLogin('example@example.com');
        LoginPage.setPassword('hkjhkhkjdh');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    })

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });
});


