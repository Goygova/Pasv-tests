const { expect } = require('chai');

describe('Google', () => {
	it('should open google and type TED in search bar', () => {
		browser.url('https://www.google.com');

		const input = $('//input[@title="Search"]');
		input.setValue('TED');
		browser.keys('\ue007');
	});

	it('should check first title', () => {
		const firstResultTitle = $('//div[@id="res"]//h3//div[@class="ellip"]').getText();
		const expectedTitle = 'TED';

		expect(firstResultTitle).to.include(expectedTitle);
	});
});
