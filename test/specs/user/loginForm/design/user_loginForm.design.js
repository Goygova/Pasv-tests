const { expect } = require('chai');
const { url } = require('./../../../../constants');

describe('User - Login Form - Design', () => {
	before(() => {
		browser.url(url.loginUrl);
	});

	it('should validate h1 is displayed ', () => {
		const element = $('//h1');
		const isDisplayed = element.isDisplayed();
		expect(isDisplayed).true;
	});

	it('should validate h1 has a correct color', () => {
		const element = $('//h1');
		const actualColor = element.getCSSProperty('color').parsed.hex;
		const expectedColor = '#333333';

		expect(actualColor).to.be.eq(expectedColor);
	});

	it('should have correct color for empty email field', () => {
		const element = $('//input[@name="email"]');
		const borderColor = element.getCSSProperty('border-color').parsed.hex.toLowerCase();
		const expectedBorderColor = '#ced4da';
		expect(borderColor).to.eq(expectedBorderColor);
	});

	it('should have correct color for correct email field', () => {
		const element = $('//input[@name="email"]');
		element.setValue('qwe@asd.asd');
		browser.keys('Tab');
		browser.pause(300);
		const borderColor = element.getCSSProperty('border-color').parsed.hex.toLowerCase();
		const expectedBorderColor = '#24c88b';
		expect(borderColor).to.eq(expectedBorderColor);
	});

	it('should have correct color for incorrect email field', () => {
		const element = $('//input[@name="email"]');
		element.setValue('qwe........asd.asd');
		browser.keys('Tab');
		browser.pause(500);
		const borderColor = element.getCSSProperty('border-color').parsed.hex.toLowerCase();
		const expectedBorderColor = '#ff4465';
		expect(borderColor).to.eq(expectedBorderColor);
	});
});
