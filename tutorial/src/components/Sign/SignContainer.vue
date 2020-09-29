<template>
    <div>
        <CrossBack></CrossBack>
        <SignTitle></SignTitle>   
        <SignField></SignField>   
        <SignButton></SignButton>   
        <ForgetHelp></ForgetHelp>
    </div>
</template>

<script>

import CrossBack from './components/Sign/CrossBack.vue'
import SignTitle from './components/Sign/SignTitle.vue'
import SignField from './components/Sign/SignField.vue'
import SignButton from './components/Sign/SignButton.vue'
import ForgetHelp from './components/Sign/ForgetHelp.vue'

export default {
    component: {
        CrossBack,
        SignTitle,
        SignField,
        SignButton,
        ForgetHelp
    }
}
</script>

<style>

</style>