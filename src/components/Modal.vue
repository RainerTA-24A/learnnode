<script setup>
defineProps(['active']);
</script>

<template>
    <div class="modal" :class="{ 'is-active': active }">
        <div class="modal-background" @click="$emit('close')"></div>
        <div class="modal-content">
            <p class="image is-4by3">
                <img src="https://bulma.io/assets/images/placeholders/1280x960.png" alt="">
            </p>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
</template>