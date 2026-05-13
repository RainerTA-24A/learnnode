<script setup>
import LeafletMap from '../components/LeafletMap.vue';
import { ref } from 'vue';

let center = ref([59.42699, 24.74357]);

let coords = ref([59.42699, 24.74357]);
if ("geolocation" in navigator) {
    setInterval(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude, position.coords.longitude);
            coords.value = [position.coords.latitude, position.coords.longitude];
        });
    }, 1000);

} else {
    /* geolocation IS NOT available */
}


</script>

<template>
    <button class="button is-primary" @click="center = [57.760896253658956, 26.62261506602996]">Go to Litsi</button>
    <button class="button is-primary" @click="center = [59.076041249350254, 24.182401774607843]">Go to Tussu</button>
    <LeafletMap :center="center" :zoom="15" :marker="coords"></LeafletMap>

</template>

<style></style>
