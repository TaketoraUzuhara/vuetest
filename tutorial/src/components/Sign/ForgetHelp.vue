<template>
    <div class="forget_container">
        <span class="help_line01"></span>
        <router-link to="#" class="forget">
          <span>Forget Password ?</span>
        </router-link>
        <span class="help_line02"></span>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.forget_container{
    width: 100%;
    display: flex;
    margin-top: 10%;
    text-align: center;
}
.help_line01{
  display: block;
  width: 10%;
  height: 1px;
  background: #000;
  margin: auto;
  margin-right: 0;
}
.help_line02{
  display: block;
  width: 10%;
  height: 1px;
  background: #000;
  margin: auto;
  margin-left: 0;
}
.forget{
  display: block;
  text-align: center;
  font-size: 8px;
  font-weight: bold;
  width: 50%;
  margin: auto;
  text-decoration: none;
  color: #000;
}

</style>