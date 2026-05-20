<script setup>
import Message from './Message.vue';

defineProps({
    messages: {
        type: Array,
        required: true,
    },
});
</script>
<template>
    <div class="columns" v-for="message in messages" :key="message.id">
        <div class="column">
            <Message v-if="!message.isMe" color="primary" size="small">
                <p>{{ message.text }}</p>
                <b>{{ message.name }}</b>
            </Message>
            
        </div>
        <div class="column">
            <Message v-if="message.isMe" size="small" color="info">
                <p>{{ message.text }}</p>
                <b>{{ message.name }}</b>
            </Message>
        </div>
    </div>
</template>