<script setup>
import { ref } from 'vue';
let items = ref(['Sai', 'Maan', 'Rohke', 'Õlu']);
let newItem = ref('');

function add(){
    if(newItem.value.trim() !== '' ){
        items.value.push(newItem.value);
    }
    newItem.value = '';
}

</script>

<template>
    <div class="container">
        <div class="field has-addons mt-2">
            <div class="control is-expanded">
                <input class="input" type="text" v-model="newItem" @keypress.enter="add" placeholder="Add to items list">
            </div>
            <div class="control">
                <button class="button is-info" @click="add">
                    Add item
                </button>
            </div>
        </div>
        <div class="content">
            <h1>All items</h1>
            <ul>
            <li v-for="item in items">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<style>

</style>    