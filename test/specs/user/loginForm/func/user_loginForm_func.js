const expect = require('chai').expect;
const loginAction = require('../../../../cheatsheet/loginActions');
const { url } = require('./../../../../constants');

describe('Login form', () => {
	before(() => {
		browser.url(url.loginUrl);
	});

	it('should have correct h1', () => {
		const element = '//h1';
		const actualH1Text = $(element).getText();
		const expectedText = 'User Login';
		expect(actualH1Text).to.eq(expectedText);
	});

	it('should login', () => {
		loginAction();
		const pageUrl = browser.getUrl();
		const validUrl = 'https://stage.pasv.us/user/5d687e4983d5d600380e6b51';
		expect(pageUrl).equal(validUrl);
	});
});
