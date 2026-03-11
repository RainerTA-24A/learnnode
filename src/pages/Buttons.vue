<script setup>
import { ref } from 'vue';
import Button from '../components/Button.vue';

let clickCount = ref(0);

function handleClick() {
    clickCount.value++;
}
</script>

<template>
    <div class="container mt-5">
        <h1 class="title">Button Component Demo</h1>
        
        <div class="box">
            <h2 class="subtitle">Colors</h2>
            <div class="buttons">
                <Button label="Primary" color="primary" @click="handleClick" />
                <Button label="Link" color="link" @click="handleClick" />
                <Button label="Info" color="info" @click="handleClick" />
                <Button label="Success" color="success" @click="handleClick" />
                <Button label="Warning" color="warning" @click="handleClick" />
                <Button label="Danger" color="danger" @click="handleClick" />
            </div>
        </div>

        <div class="box">
            <h2 class="subtitle">Sizes</h2>
            <div class="buttons">
                <Button label="Small" size="small" color="info" />
                <Button label="Normal" size="normal" color="info" />
                <Button label="Medium" size="medium" color="info" />
                <Button label="Large" size="large" color="info" />
            </div>
        </div>

        <div class="box">
            <h2 class="subtitle">States</h2>
            <div class="buttons">
                <Button label="Loading" loading color="primary" />
                <Button label="Disabled" disabled color="warning" />
                <Button label="Normal" color="success" />
            </div>
        </div>

        <div class="box">
            <h2 class="subtitle">Full Width</h2>
            <Button label="Full Width Button" fullwidth color="primary" />
        </div>

        <div class="box">
            <h2 class="subtitle">Click Counter</h2>
            <p>Clicked <strong>{{ clickCount }}</strong> times</p>
            <Button label="Click Me!" color="link" @click="handleClick" />
        </div>
    </div>
</template>
