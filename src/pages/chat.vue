<script setup>
import { ref } from 'vue';
import MessageList from '../components/MessageList.vue';
import axios from 'axios';


let name = ref('');
let nameSet = ref(false);

let messages = ref([

]);
let message = ref('');

function joinChat() {
    nameSet.value = true;
    setInterval(() => {
        axios.get('http://localhost:5000/api/messages').then(res => {
            messages.value = res.data.map(m => ({ ...m, isMe: m.name === name.value }));
        });
    }, 1000);
    axios.get('http://localhost:5000/api/messages').then(res => {
        messages.value = res.data.map(m => ({ ...m, isMe: m.name === name.value }));
    });
}

function send() {
    messages.value.push({
        id: messages.value.length + 1,
        text: message.value,
        isMe: true,
        name: name.value,
    });
    axios.post('http://localhost:5000/api/messages', {
        text: message.value,
        name: name.value,
    });
    message.value = '';
}
</script>
<template>
    <div class="container">
        <div v-if="nameSet">
            <MessageList :messages="messages" />
            <div class="field has-addons">
                <div class="control is-expanded">
                    <input @keydown.enter="send" v-model="message" class="input" type="text"
                        placeholder="Send a message...">
                </div>
                <div class="control">
                    <button class="button is-info" @click="send">
                        Send
                    </button>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="field has-addons">
                <div class="control is-expanded">
                    <input v-model="name" @keydown.enter="joinChat" class="input" type="text"
                        placeholder="Enter your name...">
                </div>

                <div class="control">
                    <button class="button is-info" @click="joinChat">
                        Join Chat
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>