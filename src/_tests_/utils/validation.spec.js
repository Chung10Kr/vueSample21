import validation from '@/utils/common';

describe('validation.js', () => {
	test('validateEmail - valid Email', () => {
		let sStr = 'coohg93@hanmail.net';
		let bResult = validation.validateEmail(sStr);
		expect(bResult).toBe(true);
	});
	test('validateEmail - valid Email', () => {
		let sStr = 'coohg93&hanmail.net.com';
		let bResult = validation.validateEmail(sStr);
		expect(bResult).toBe(false);
	});
});
