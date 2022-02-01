import api from '@/utils/api'
import businessUtils from "@/utils/BusinessUtils.js"

export default {
    GET: async function(URL, PARAMS ,successFn ,errorFnc) {
        
        var path = businessUtils.getPath(URL, PARAMS);
        try {
            const result = await api.get(path);
            if( successFn != undefined ) successFn(result.data);
            return result.data
        } catch (error) {
            if( errorFnc != undefined ) errorFnc(error);
            return error
        }
    },
    POST: async function(URL, PARAMS,successFn ,errorFnc) {

        try {
            const result = await api.post(URL,PARAMS);
            if( successFn != undefined ) successFn(result.data);
            return result.data
        } catch (error) {
            if( errorFnc != undefined ) errorFnc(error);
            return error
        }
    }
}