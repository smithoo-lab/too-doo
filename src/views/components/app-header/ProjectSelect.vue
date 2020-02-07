<template>
    <div class="project-select">
        <div>
            <button type="button" @click="onClickButton">
                <span>Select project...</span>
                <Icon class="icon">arrow_drop_down</Icon>
            </button>
        </div>
        <div class="dropdown" v-if="isOpen">
            <a href="#">Action</a>
            <div></div>
            <a href="#">Another action</a>
            <div></div>
            <a href="#">Something else here</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        onClickButton() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>

<style scoped>
.project-select {
    float: left;
    margin-left: 30px;
    vertical-align: middle;
    width: 180px;
}
.project-select button {
    border-radius: 3px;
    border: 1px solid #fff;
    padding: 0 15px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: left;
}
.project-select button:hover {
    background-color: #30a471;
    box-shadow: 2px 1px 2px #ccc;
}
.icon {
    float: right;
    position: relative;
    top: 2px;
    left: 8px;
}
.dropdown {
    width: 100%;
    background-color: #fff;
    border: 1px solid #aaa;
}
</style>
