const baseUrl = 'https://stage.pasv.us';

const url = {
	loginUrl: 'https://stage.pasv.us/user/login',
	registerUrl: 'https://stage.pasv.us/user/register'
};

const user = {
	admin: {
		login: 'admin@test.com',
		password: '11111',
		id: '5d687e4983d5d600380e6b51'
	},
	student: {
		login: '',
		password: ''
	}
};

module.exports = { baseUrl, url, user };
