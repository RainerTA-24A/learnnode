<script setup>
import { onMounted, ref, useTemplateRef } from 'vue'

let c = useTemplateRef('myCanvas')
let x = 200
let y = 400
onMounted(() => {
    let ctx = c.value.getContext("2d")
    setInterval(() => {
        ctx.clearRect(0, 0, c.value.width, c.value.height)
        draw_ball(x, y, ctx)
    }, 1000/60)
})

function draw_ball(x, y, ctx) 
{
    ctx.beginPath()
    ctx.arc(x, y, 80, 0, 2 * Math.PI)
    ctx.fillStyle = "whitesmoke"
    ctx.strokeStyle = "red"
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
}

function move(event) {
    let rect = event.target.getBoundingClientRect()
    let pos =
    {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
    }
    x = pos.x
    y = pos.y
}

</script>

<template>
    <div class="container">
        <canvas @mousemove="move" ref="myCanvas" class="is-center" height="800" width="1250"></canvas>
    </div>
</template>

<style>
canvas
{
    border: 1px solid whitesmoke;
}
</style>