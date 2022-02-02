import networkUtils from '@/utils/NetworkUtils.js'

export default {
    
    request_get_menu: function(params , successFn,errorFnc ) {
        return networkUtils.GET('/sample/menu' ,params ,successFn,errorFnc );
    },
    request_sample_get: function(params , successFn,errorFnc ) {
        return networkUtils.GET('/sample/name' ,params ,successFn,errorFnc );
    },
    request_sample_post: function(params, successFn,errorFnc) {
        return networkUtils.POST('/sample/name' ,params ,successFn,errorFnc );
    },

}