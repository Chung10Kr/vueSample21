
export default {

    
    request_get_menu: function(params , successFn,errorFnc ) {
        console.log( errorFnc )
        console.log( params )
        const result = {data : {
            menu:[
                { name : 'Home' , src : '/home'  },
                { name : 'About', src : '/about' },
                { name : 'Ajax' , src : '/ajax'  },
            ]
        }}
        if( successFn != undefined ) successFn(result.data);
        return result.data;
        
    },

    request_sample_get: function(params , successFn,errorFnc ) {
        console.log( errorFnc )
        console.log( params )
        const result = {data : {name:"get"}}
        if( successFn != undefined ) successFn(result.data);
        return result.data;
        
    },

    request_sample_post: function(params, successFn,errorFnc) {
        console.log( errorFnc )
        console.log( params )
        const result = {data:{
            list : [
                {v:"I" , t:"Incheon"},
                {v:"B" , t:"Busan"},
                {v:"J" , t:"Jeju"}
            ]
        }}
        if( successFn != undefined ) successFn(result.data);

        return result.data
    },

}