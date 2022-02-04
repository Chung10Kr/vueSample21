<template>
    <div>
        <h1>Hellow {{name}}!</h1>
        <input id="text" type="text" v-model="input" @keyup="inputTxt" />

        <select class="form-control" v-model="region"  @change="chgRegion">
            <option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option>
        </select>

        <table class="table table-bordered" v-if="tableShow">
            <tr :key="i" v-for="(d,i) in options" >
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    components: {
        
    },
    data(){
        return {
            name : "Vue",
            input : "",
            options : [
                {v:"I" , t:"Incheon"},
                {v:"B" , t:"Busan"},
                {v:"J" , t:"Jeju"},
            ],
            region : 'J',
            tableShow : true,
        }
    },
    watch:{
        input(){
            let txt = $("#text").val()
             console.log( `${this.input} ${txt}` ) 
        },
    },
    methods:{
        inputTxt()
        {
            console.log(`input value : ${this.input}`)
        },
        chgRegion(){
            console.log(`selected value : ${this.region}`)
        }
    },
}
</script>