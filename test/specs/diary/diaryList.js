const expect = require('chai').expect;
const loginAction = require('../../cheatsheet/loginActions');

describe('Diary List', () => {
	before(() => {
		loginAction();
	});

	it('should have main menu item', () => {
		const selector = '//div[@id="site-menu"]//a[contains(text(),"Diary")]';
		const isDisplayed = $(selector).isDisplayed();
		expect(isDisplayed).to.be.true;
	});
});
