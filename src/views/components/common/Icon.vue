<template>
    <i class="material-icons"
        :style="iconStyle">
        <slot></slot>
    </i>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: null,
        },
        color: {
            type: String,
            default: null,
        },
    },
    computed: {
        iconStyle() {
            return {
                fontSize: this.size ? this.size + 'px' : null,
                color: this.color,
            };
        },
    },
};
</script>
