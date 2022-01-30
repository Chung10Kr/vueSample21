<template>
  <div class="wrapper">
    <Header v-if=" sMenuType == 'Header' "  v-bind:initMenus="aMenu"/>
    <SideBar v-if=" sMenuType == 'SideBar'" v-bind:initMenus="aMenu"/>

    <div id="content" class="content PdL10 PdR10 PdT0 PdB0">
      <span v-if=" sMenuType == 'SideBar' " 
            style="font-size:30px;cursor:pointer" 
            @click="openNav">&#9776; Menu </span>
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import SideBar from '@/components/layout/SideBar.vue';


export default {
  name: 'App',
  components: {
    Header,
    SideBar,
    Footer
  },
  data(){
    return {
      sMenuType : "Header",
      //sMenuType : "SideBar",
      aMenu : [
        {
          name : '기본관리' , src : '/',
          child : [
            {name : '사용자관리' , src : '/About'},
            {name : '코드관리' , src : '/About'},
            {name : '로그관리' , src : '/About'}
          ]
        },
        {
          name : '입고' , src : '/',
          child : [
            {name : '입고관리' , src : '/About'},
            {
              name : '입고이력' , src : '/About',
              child : [
                {name : '미입고이력' , src : '/About'},
                {name : '강제입고이력' , src : '/About'},
                {name : '시스템연동' , src : '/About'}
              ]
            },
            
          ]
        },
      ]
    }
  },
  methods: {
        openNav(){
            document.getElementById("mySidenav").style.width = "250px";
        },
  }
}
</script>

<style scoped>
.wrapper {
  min-height: 100%;
  position: relative;
  padding-bottom: 19px; /* footer height */
}
</style>
