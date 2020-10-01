<template>
  <div>
    <NavigationMenu class="navi_container"></NavigationMenu>
    <SignContainer class="sign_in_container"></SignContainer>
  </div>
</template>

<script>

import SignContainer from '../components/Sign/SignContainer'
import NavigationMenu from '../components/Global/NavigationMenu'


export default {
  name: 'Sign-In',
  components:{
    SignContainer,
    NavigationMenu,
  }
}
</script>

<style>
.navi_container{
  z-index: 100;
}

.sign_in_container{
  z-index: 50;
}


</style>