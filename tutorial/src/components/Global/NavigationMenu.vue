<template>
<div class="navi_menu">
    <div class="title" :class="{ 'title2' : active}">SUP!</div>
    <div class="header_menu">
        <div class="header_menu_line" @click="naviOpen">
            <span class="burger_line line01" :class="{ 'line_active line01_active' : active}"></span>
            <span class="burger_line line02" :class="{ 'line_active line02_active' : active}"></span>
            <span class="burger_line line03" :class="{ 'line_active line03_active' : active}"></span>
        </div>
    </div>
    <transition name="navi">
        <nav class="navi" v-show="navi">
            <ul class="navi_wrap">
                <li><router-link to="/">MileStone</router-link></li>
                <li><router-link to="/circle">Circles</router-link></li>
                <li><router-link to="/Waseinfo">Wase-info</router-link></li>
                <li><router-link to="/signin">Sign In</router-link></li>
                <li><router-link to="/signup">Sign Up</router-link></li>
            </ul>
        </nav>
    </transition>
 </div>
</template>

<script>
export default {
  data: function(){
      return{
        active: false,
        navi: false,
    }
  },
  methods: {
    naviOpen: function() {
      this.active = !this.active;
      this.navi = !this.navi;
    }
  }
}
</script>

<style>
.navi_menu{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
.title{
    display: block;
    width: 50%;
    text-align: center;
    font-size: 20px;
    left: 25%;
    margin-top: 5%;
    color: #9b042c;
    font-weight: bold;
    position: fixed;

}
.title2{
    color: #fff;
}

.header_menu {
    width: 60px;
    height: 60px;
    position: fixed;
    top: 0;
    right: 0;
    margin-right: 10px;
}
.header_menu_line {
    width: 36px;
    height: 30px;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    cursor: pointer;
}
.burger_line {
    width: 100%;
    height: 3px;
    background: #9b042c;
    display: block;
    transition: .6s;
    position: absolute;
}
.line01{
    top: 0;
}
.line02{
    top: 14px;
}
.line03 {
    bottom: 0;
}
.line_active {
    transition: .6s;
}
.line01_active{
    transform: rotate(45deg);
    top: 50%;
    background: #fff;
}
.line02_active{
    opacity: 0;
}
.line03_active{
    transform: rotate(-45deg);
    top: 50%;
    background: #fff;
}
.navi {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #9b042c;
}
.navi_wrap {
    list-style-type: none;
    text-align: center;
    padding-left: 0;
    background: #9b042c;
    padding: 60px 0;
    width: 100%;
}
.navi_wrap li a{
    text-decoration: none;
    color: #fff;
    display: block;
    padding: 10px 100px;  
}
navi-enter, navi-leave-to {
    opacity: 0;
}
navi-enter-to, navi-leave {
    opacity: 1;
}
navi-enter-active, navi-leave-active {
    transition: .6s;
}

</style>