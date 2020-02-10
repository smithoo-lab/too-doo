<template>
    <div class="search" :style="focusStyle">
        <div class="wrap">
            <input type="text"
                @focus="onFocus"
                @blur="onBlur"
                placeholder="search..." />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isFocus: false,
        };
    },
    computed: {
        focusStyle() {
            const width = this.isFocus ? '360px' : '300px';
            return { width };
        },
    },
    methods: {
        onFocus() {
            this.isFocus = true;
        },
        onBlur() {
            this.isFocus = false;
        },
    },
};
</script>

<style scoped>
.search {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 300px;
    transition: width .2s ease-out;
}
.wrap {
    width: 100%;
    height: 30px;
    margin-top: 14px;

}
.search input {
    width: 100%;
    height: 100%;
    line-height: 30px;
    font-size: 12px;
    padding: 0 12px;
    border-radius: 2px;
}
</style>
