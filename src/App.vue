<script setup>
import { ref } from 'vue';

let message = ref('Hello Vue!');

/*function input(event){
    console.log(event.target.value)
    message.value = event.target.value
  }*/

</script>

<template>
    <div class="container">
    <h1>{{ message.split('').reverse().join('') }}</h1>
    <button class="button is-primary" @click=" message = 'This ez'">Click me</button> <!-- v-on: asemel @-->
    <!--   <input/>   ise sulgev tag-->
     <!--  <input class="input" :value="message" @input="message = $event.target.value">   v-on:input="input" siis peaks seda function input(event) kasutama-->	 
    <!--   <input class="input" v-bind:value="message" v-on:change="console.log('change')" placeholder="change"> -->

    <input class="input" v-model="message">
    </div>
</template>

<style>

</style>