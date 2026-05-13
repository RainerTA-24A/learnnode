<script setup>
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { onMounted, ref } from 'vue';
onMounted(() => {
    let coords = ref({ lat: 0, long: 0 });
    let location = null;
    if ("geolocation" in navigator) {
        setInterval(() => {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position.coords.latitude, position.coords.longitude);
                coords.value.lat = position.coords.latitude;
                coords.value.long = position.coords.longitude;
                if (location) {
                    location.setLatLng([coords.value.lat, coords.value.long]).update();
                } else {
                    location = L.marker([coords.value.lat, coords.value.long]).addTo(map);
                }
            });
        }, 1000);

    } else {
        /* geolocation IS NOT available */
    }
    let map = L.map('map').setView([59.42688, 24.74357], 18);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    //L.marker([59.42688, 24.74357]).addTo(map);

});


</script>

<template>
    <div id="map"></div>
</template>

<style>
#map {
    height: 800px;
}
</style>
