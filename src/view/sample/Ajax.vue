<template>
    <div>
        <h1>Hellow {{name}}!</h1>
        <button type="button" @click="getData">Ajax Get</button>
        
        <br/>
        <br/>

        <table class="table table-bordered">
            <tr :key="i" v-for="(d,i) in options" >
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
            </tr>
        </table>

        <button type="button" @click="setData">Ajax Post</button>

    </div>
</template>

<script>

import FBNetwork from '@/config/FBNetwork.js'

export default {
    components: {
        
    },
    data(){
        return {
            name : "",
            options : []
        }
    },
    methods:{
        getData()
        {
            let self = this;
            let params = {
                name : "lee",
                age  : "29",
            };
            let sucFnc = function(result){
                self.name = result['name'];
            };
            FBNetwork.request_sample_get( params, sucFnc );
        },
        async setData()
        {
            let params = {
                name : "lee",
                age  : "29",
            };
            let result = await FBNetwork.request_sample_post( params );
            this.options = result['list'];
        },
    },
}
</script>