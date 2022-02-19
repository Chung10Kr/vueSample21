import api from '@/api/index.js';
import businessUtils from '@/utils/BusinessUtils.js';
import bus from '@/utils/bus.js';
export default {
	GET: async function (URL, PARAMS, successFn, errorFn) {
		bus.$emit('start:spinner');
		let path =
			Object.keys(PARAMS).length === 0
				? URL
				: businessUtils.getPath(URL, PARAMS);
		try {
			const result = await api.get(path);
			if (successFn != undefined) successFn(result.data);
			bus.$emit('end:spinner');
			return result.data;
		} catch (error) {
			if (errorFn != undefined) errorFn(error);
			bus.$emit('end:spinner');
			return error;
		}
	},
	POST: async function (URL, PARAMS, successFn, errorFn) {
		try {
			bus.$emit('start:spinner');
			const result = await api.post(URL, PARAMS);
			if (successFn != undefined) successFn(result.data);
			bus.$emit('end:spinner');
			return result.data;
		} catch (error) {
			if (errorFn != undefined) errorFn(error);
			bus.$emit('end:spinner');
			return error;
		}
	},
};
