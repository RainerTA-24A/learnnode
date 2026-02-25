<script setup>
let props = defineProps({
    title: String,
    //required: true,

    color: {
        type: String,
        validator(value, probs) {
            return [
                'dark',
                'primary',
                'link',
                'info',
                'success',
                'danger',
                'warning',
            ].includes(value);
        }
    },
    size: {
        type: String,
        validator(value, probs) {
            return [
                'small',
                'medium',
                'large',
            ].includes(value);
        },
        default: 'large'
    }
});

let classes = '';
if (props.color) {
    classes += 'is-' + props.color;
}
classes += ' is-' + props.size;
</script>
<template>
    <article class="message" :class="classes">
        <div v-if="title" class="message-header">
            <p>{{ title }}</p>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            <slot></slot>
        </div>
    </article>

</template>