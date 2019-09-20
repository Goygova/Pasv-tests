const expect = require('chai').expect;

describe('Login form', () => {
	before(() => {
		browser.url('https://stage.pasv.us/user/login');
	});

	it('should login', () => {
		const emailField = $('//input[@name="email"]');
		const passwordField = $('//input[@name="password"]');
		const loginButton = $('//button[@type="submit"]');

		emailField.setValue('admin@test.com');
		passwordField.setValue('11111');

		loginButton.click();
		browser.pause(1000);

		const pageUrl = browser.getUrl();
		const validUrl = 'https://stage.pasv.us/user/5d687e4983d5d600380e6b51';
		expect(pageUrl).equal(validUrl);
	});
});
