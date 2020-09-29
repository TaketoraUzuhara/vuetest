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
        width: 100%;
        border-radius: 50%;
        background-color: gray;
    }
    .line1{
        width: 4px;
        height: 2px;
        background-color: #000;
        border: none;
        transform: rotate(45deg);
    }
    .line2{
        width: 4px;
        height: 2px;
        background-color: #000;
        border: none;
        transform: rotate(-45deg);
    }
</style>