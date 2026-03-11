<script setup>
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        validator(value) {
            return [
                'primary',
                'link',
                'info',
                'success',
                'warning',
                'danger',
                'white',
                'black',
                'light',
                'dark',
            ].includes(value);
        }
    },
    size: {
        type: String,
        validator(value) {
            return [
                'small',
                'normal',
                'medium',
                'large',
            ].includes(value);
        },
        default: 'normal'
    },
    loading: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    fullwidth: {
        type: Boolean,
        default: false
    }
});

let classes = '';
if (props.color) {
    classes += 'is-' + props.color + ' ';
}
if (props.size) {
    classes += 'is-' + props.size + ' ';
}
if (props.loading) {
    classes += 'is-loading ';
}
if (props.fullwidth) {
    classes += 'is-fullwidth ';
}
</script>

<template>
    <button 
        class="button" 
        :class="classes"
        :disabled="disabled"
        @click="$emit('click')"
    >
        {{ label }}
    </button>
</template>
