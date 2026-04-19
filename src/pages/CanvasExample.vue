<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
});
</script>

<template>
    <canvas id="myCanvas" height="800" width="1550"></canvas>
</template>
<style>
canvas {
    border: 1px solid black;

}
</style>