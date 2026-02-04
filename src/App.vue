<script setup>
import { ref } from 'vue';
import Modal from './components/Modal.vue';
import ImgModal from './components/ImgModal.vue';
let modal1Active = ref(false);
let modal2Active = ref(false);


</script>

<template>
    <div class="container">
        <button class="button is-primary" @click="modal1Active = true">Open Modal</button>
        <button class="button is-link" @click="modal2Active = true">Open Modal2</button>

        <Modal :active="modal1Active" @close="modal1Active=false">
            <div class="box">I'm in a box.</div>
        </Modal>
        <ImgModal :active="modal2Active" @close="modal2Active=false" url="https://picsum.photos/1280/960?r=2">
             
        </ImgModal>
    </div>
</template>

<style></style>