<script setup>
import { ref } from 'vue';

let joke = ref('');

let res = await fetch('https://api.chucknorris.io/jokes/random');
let data = await res.json();
joke.value = data.value;


</script>

<template>
    <div class="container content">
        <h1>{{ joke }}</h1>
    </div>
</template>