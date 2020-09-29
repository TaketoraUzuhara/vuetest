<template>
<div>
    <div class="header__menu">
      <div>SUP</div> 
      <div class="header__menu__line" @click="naviOpen" :class="{'is-active': active}">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div v-show="navi">
        <router-link to="/milestone">Milestone</router-link>
        <router-link to="/circle">Circle</router-link>
        <router-link to="/waseinfo">Wase-info</router-link>
        <router-link to="/signin">Sign In</router-link>
        <router-link to="/signup">Sign Up</router-link>
        <router-view></router-view>
    </div>
</div>
  
</template>

<script>

export default {
    name: 'NavigationMenu',
    data: {
        active : false,
        navi : false,
    },
    methods:{
        naviOpen (){
            this.active = !this.active
            this.navi = !this.navi
        }
    }
}
</script>

<style>

</style>