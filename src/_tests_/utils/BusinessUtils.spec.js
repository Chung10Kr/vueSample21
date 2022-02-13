import BusinessUtils from '@/utils/BusinessUtils';

describe('BusinessUtils.js', () => {
	test('getPath - valid GET URL', () => {
		let sUrl = '192.168.0.1';
		let oParams = {
			user_name: 'Test',
			user_age: '18',
			user_gender: 'F',
		};
		let result = BusinessUtils.getPath(sUrl, oParams);
		expect(result).toBe('192.168.0.1?user_name=Test&user_age=18&user_gender=F');
	});
});
