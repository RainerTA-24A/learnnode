<script setup>
import { ref } from 'vue';
import Modal from './components/Modal.vue';
let modal1Active = ref(false);


</script>

<template>
    <div class="container">
        <button class="button is-primary" @click="modal1Active = true">Open Modal</button>

        <Modal :active="modal1Active" @close="modal1Active=false"></Modal>
    </div>
</template>

<style></style>