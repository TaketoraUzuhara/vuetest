<template>
  <div class="crossbutton">
      <span class="line1"></span>
      <span class="line2"></span>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .crossbutton{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #dcdcdc;
        position: absolute;
        right: 0;
        margin-top: 10%;
        margin-right: 10%;
    }
    .line1{
        width: 80%;
        height: 1px;
        display: block;
        background: #000;
        border: none;
        transform: rotate(45deg);
        position: absolute;
        left: 10%;
        top: 50%;
    }
    .line2{
        width: 80%;
        height: 1px;
        display: block;
        background: #000;
        border: none;
        transform: rotate(-45deg);
        position: absolute;
        top: 50%;
        left: 10%;
    }
</style>