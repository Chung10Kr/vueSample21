import api from '@/utils/api/index.js';
import businessUtils from '@/utils/BusinessUtils.js';

export default {
	GET: async function (URL, PARAMS, successFn, errorFn) {
		let path =
			Object.keys(PARAMS).length === 0
				? URL
				: businessUtils.getPath(URL, PARAMS);
		try {
			const result = await api.get(path);
			if (successFn != undefined) successFn(result.data);
			return result.data;
		} catch (error) {
			if (errorFn != undefined) errorFn(error);
			return error;
		}
	},
	POST: async function (URL, PARAMS, successFn, errorFn) {
		try {
			const result = await api.post(URL, PARAMS);
			if (successFn != undefined) successFn(result.data);
			return result.data;
		} catch (error) {
			if (errorFn != undefined) errorFn(error);
			return error;
		}
	},
};
