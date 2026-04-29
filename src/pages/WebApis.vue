<script setup>
import { ref } from 'vue';

let coords = ref({ lat: 0, long: 0 });
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        coords.value.lat = position.coords.latitude;
        coords.value.long = position.coords.longitude;
    });
} else {
    /* geolocation IS NOT available */
}

</script>

<template>
    <h1>Lat: {{ coords.lat }} Long: {{ coords.long }}</h1>
</template>