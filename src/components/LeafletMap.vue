<script setup>
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { onMounted, ref, watch } from 'vue';

const { center, zoom, marker } = defineProps(['center', 'zoom', 'marker']);
let map = null;
let gps = null;
onMounted(() => {

    map = L.map('map').setView(center, zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    gps = L.marker(marker).addTo(map);

});

watch(() => center, (newCenter, oldCenter) => {
    console.log(newCenter, oldCenter);
    map.flyTo(newCenter);
});

watch(() => marker, (newMarker) => {
    gps.setLatLng(newMarker).update();
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
