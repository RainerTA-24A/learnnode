<script setup>
import { ref } from 'vue';

let joke = ref('');

fetch('https://api.chucknorris.io/jokes/random').then(res => {
    return res.json();
}).then(data => {
    console.log(data);
    joke.value = data.value;
});



</script>

<template>
    <div class="container content">
        <h1>{{ joke }}</h1>
    </div>
</template>