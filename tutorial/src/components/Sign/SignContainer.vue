<template>
    <div class="sign_container">
        <div class="sign_block">
            <CrossBack class="cross_button"></CrossBack>
            <SignTitle></SignTitle>   
            <SignField></SignField>   
            <SignButton></SignButton>   
            <ForgetHelp></ForgetHelp>
        </div> 
    </div>
</template>

<script>

import CrossBack from './CrossBack'
import SignTitle from './SignTitle'
import SignField from './SignField'
import SignButton from './SignButton'
import ForgetHelp from './ForgetHelp'

export default {
    components: {
        CrossBack,
        SignTitle,
        SignField,
        SignButton,
        ForgetHelp
    },
}
</script>

<style>
    .sign_container{
        display: block;
        position: relative;
        width: 100%;
        margin-top: 20%;
        background: #9b042c;
        height: 80vh;
    }
    .sign_block{
        width: 80%;
        height: 80%;
        position: absolute;
        margin: auto;
        background: #fff;
        display: flex;
        flex-direction: column;
        margin-top: 15%;
        margin-left: 10%;
        border-radius: 30px;
    }
</style>