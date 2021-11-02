import BasePage from './basePage';

class AccountSettingsPage extends BasePage {
    get header () { return $('h2')}
}

export default new AccountSettingsPage();
