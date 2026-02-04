<script setup>
defineProps(['active', 'titles']);
</script>
<template>
    <div class="tabs is-centered">
        <ul>
            <li v-for="(title, index) in titles" :class="{'is-active': index === active }" @click="$emit('setActive', index)">
                <a>{{ title }}</a></li>
        </ul>
    </div>
</template>
