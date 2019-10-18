const expect = require('chai').expect;

describe('Check Page Title', function() {

    it("follows link to new page", function() {
        
        browser.url('https://www.saucedemo.com/')
        browser.pause(10000);
        const title = browser.getTitle();
        expect(title).to.equal('Swag Labs');
    });
});
