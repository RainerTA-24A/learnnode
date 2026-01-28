<script setup>
import { computed, ref } from 'vue';
import ItemList from './ItemList.vue';
let i = 1;
let items = ref([
    {id: i++, text: 'Sai', isDone: true},
    {id: i++, text: 'Maan', isDone: false},
    {id: i++, text: 'Rohke', isDone: true},
    {id: i++, text: 'Õlu', isDone: false},
]);
let newItem = ref('');

let doneItems = computed(() => items.value.filter(i => i.isDone));
let toDoItems = computed(() => items.value.filter(i => !i.isDone));

function add(){
    if(newItem.value.trim() !== '' ){
        items.value.push({id: i++, text: newItem.value.trim(), isDone: false});
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
            <ItemList :items="items" title="All Items"></ItemList>
            <ItemList :items="doneItems" title="Done Items"></ItemList>
            <ItemList :items="toDoItems" title="ToDo Items"></ItemList>

        </div>
    </div>
</template>

<style>

</style>    