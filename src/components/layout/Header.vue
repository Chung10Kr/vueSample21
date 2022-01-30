<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark" class="PdL10 PdR10 PdT5 PdB5">
            <b-navbar-brand href="/">HOME</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav >
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right 
                                        :key="i" 
                                        v-for="(d,i) in aMenu">
                        <template #button-content><em>{{d.name}}</em></template>
                        <b-dropdown-item 
                                        :href="d2.src" 
                                        :key="i2" 
                                        v-for="(d2,i2) in d.child"
                                        >
                            {{d2.name}}
                        </b-dropdown-item>

                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
    name : "Header",
    props : ['initMenus'],
    data(){
        return {
            aMenu : this.initMenus
        }
    },
    computed:{
    },
    mounted(){
        console.log( this.aMenu )
    }

};
</script>
