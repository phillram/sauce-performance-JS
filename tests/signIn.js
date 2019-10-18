const expect = require('chai').expect;
const username = 'standard_user';
const password = 'secret_sauce';

describe('Sign In Test', function() {

    it("Sign in is functional", function() {
        browser.url('https://www.saucedemo.com/')
        const userInput = $('#user-name');
        const passwordInput = $('#password');
        const loginBtn = $('#login_button_container > div > form > input.btn_action');
        browser.waitUntil(userInput.isVisible);
        userInput.setValue(username);
        passwordInput.setValue(password);
        loginBtn.click();

    });
});
