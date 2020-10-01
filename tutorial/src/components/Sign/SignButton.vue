<template>
  <div class="button_container">
    <router-link to="#">
      <button class="button">Sign In</button>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.button_container{
  width: 90%;
  margin: auto;
  display: block;
  margin-top: 10%;
  text-align: center;
  margin-bottom: 0;
}

.button{
  width: 80%;
  border: 2px solid #9b042c;
  border-radius: 20px;
  height: 100%;
  padding: 5px;
  margin: auto;
  background: #fff;
  color: #9b042c;
  font-weight: bold;
}

</style>