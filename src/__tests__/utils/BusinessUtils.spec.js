import BusinessUtils from '@/utils/BusinessUtils';

describe('BusinessUtils.js', () => {
	test('getPath - valid GET URL', () => {
		let sUrl = '192.168.0.1';
		let oParams = {
			user_name: 'Test',
			user_age: '18',
			user_gender: 'F',
		};
		let sResult = BusinessUtils.getPath(sUrl, oParams);
		let sExpect = '192.168.0.1?user_name=Test&user_age=18&user_gender=F';
		expect(sResult).toBe(sExpect);
	});
	test('getPath - no Params', () => {
		let sUrl = '192.168.0.1';
		let sResult = BusinessUtils.getPath(sUrl);
		expect(sResult).toBe('192.168.0.1');
	});
});
