const { user, url } = require('../constants');

module.exports = () => {
	browser.url(url.loginUrl);
	const emailField = $('//input[@name="email"]');
	const passwordField = $('//input[@name="password"]');
	const loginButton = $('//button[@type="submit"]');
	const EMAIL = user.admin.login;
	const PASSWORD = user.admin.password;
	emailField.setValue(EMAIL);
	passwordField.setValue(PASSWORD);

	loginButton.click();
	browser.pause(1000);
};
