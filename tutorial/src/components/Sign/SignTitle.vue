<template>
  <div class="title_container">
        <div class="Title">Sign In</div>
        <div class="subtitle">
            <div class="route_title">
                Already an user ?
            </div>
            <div class="route_signup">
                <router-link to="/signup">Sign Up</router-link>
            </div>   
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .title_container{
        width: 100%;
        text-align: center;
        margin-top: 25%;
    }
    .Title{
        text-align: center;
        width: 100%;
        font-weight: bold;
        font-size: 20px;
    }
    .subtitle{
        padding-top: 5%;
        display: flex;
        width: 100%;
    }
    .route_signup{
        display: block;
        width: 40%;
        text-align: left;
        font-size: 10px;
        font-weight: bold;
    }
    .route_signup a{
        color: #9b042c;
        text-decoration: none;
    }
    .route_title{
        width: 40%;
        font-weight: bold;
        font-size: 10px;
        margin-left: auto;
    }
</style>