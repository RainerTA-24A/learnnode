<script setup>
import { ref } from 'vue';

let message = ref('Hello Vue!');


</script>

<template>
    <div class="container">
    <h1>{{ message.split('').reverse().join('') }}</h1>
    <button class="button is-primary" @click=" message = 'This ez'">Click me</button> <!-- v-on: asemel @-->
    <!--   <input/>   ise sulgev tag-->

    <input class="input" v-model="message">
    </div>
</template>

<style>

</style>