<template>
  <div class="field_container">
      <input type="email" placeholder="Email" class="email">
      <input type="password" placeholder="Password" class="password">
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .field_container{
    width: 100%;
    display: block;
    margin-top: 10%;
    text-align: center;
  }
  .email{
    display: block;
    width: 80%;
    margin: auto;
    border: none;
    border-bottom: 2px solid #9b042c;
    text-align: left;
  }
  .password{
    display: block;
    width: 80%;
    margin: auto;
    border: none;
    border-bottom: 2px solid #9b042c;
    text-align: left;
    margin-top: 10%;
  }

</style>