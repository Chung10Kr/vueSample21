<template>
    <div>
        <h1>Hellow {{name}}!</h1>
        <input type="text" v-model="input" />
        <button type="button" @click="getData">Get</button>
        <button type="button" @click="setData">Set</button>

        <select class="form-control" v-model="region"  @change="chgRegion">
            <option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option>
        </select>

        <table class="table table-bordered" v-if="tableShow">
            <!-- 
                v-if : false일때 랜더링 자체를 안함
                v-show : false일때도 랜더링은 하지만 보여주지는 않음  -> 자주 랜더링하는요소에 권장
                랜더링은 이미 되어있고 스타일로 보이고 안보이는거라 리소스를 적게 먹음
            -->
            <tr :key="i" v-for="(d,i) in options" >
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name : "Vue",
            input: "ABC",
            options : [
                {v:"I" , t:"Incheon"},
                {v:"B" , t:"Busan"},
                {v:"J" , t:"Jeju"},
            ],
            region : 'J',
            tableShow : false
        }
    },
    watch:{
        input(){
             console.log( this.input ) 
        }
    },
    methods:{
        getData()
        {
            alert( this.input )
        },
        setData()
        {
            this.input = '12345'
        },
        chgRegion(){
            alert( this.region )
            this.tableShow = true;
        }
    },
}
</script>