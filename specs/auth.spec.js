import RegistrationPage from '../pages/register.page';
import {messages, user} from '../data/register.data';
import AccountSettingsPage from '../pages/accountSettings.page';
import { text } from '../data/accountSettings.data';


describe('Create user', () => {
    beforeEach(async () => {
        await RegistrationPage.open();
    });

    it.skip('successful create user', async () => {
        await RegistrationPage.registrationPart1(user.zipCodeCorrect);
        await RegistrationPage.registrationPart2(user.firstName,user.lastName, user.email, user.username, user.password, user.confirmPassword);
        await expect(AccountSettingsPage.header.getText()).equal(text.header);
    });

    it('unsuccessful create user', async () => {
        await RegistrationPage.registrationPart1(user.zipCodeWrong);
        await expect(RegistrationPage.notification).toHaveTextContaining(messages.notification);
    });
});
