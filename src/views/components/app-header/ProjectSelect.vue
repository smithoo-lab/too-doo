<template>
    <div class="project-select">
        <div class="select-btn">
            <button type="button" @click="onClickButton">
                <span>Select project...</span>
                <Icon class="icon">arrow_drop_down</Icon>
            </button>
        </div>
        <ul class="dropdown" v-if="isOpen">
            <li v-for="project in projects" :key="project.id">
                <strong>{{ project.name }}</strong>
                <p>{{ project.desc }}</p>
            </li>
            <li class="add-project">
                <Icon class="icon" size="16">add</Icon> Add project
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // TODO: add open animation
            isOpen: false,
            projects: [
                // TODO: Load data from server
                { id: '1', name: 'project1', desc: 'dlfdks dkfsl dlsd sl dk ls dfdsfsdf' },
                { id: '2', name: 'project2', desc: 'dlfdks dkfsl dlsd sl d d dljksl dk ls dfdsfsdf' },
            ],
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
    width: 200px;
    height: 60px;
}
.project-select:after {
    content: "";
    display: block;
    clear: both;
}
.select-btn {
    margin-top: 15px;
    height: 30px;
}
.select-btn button {
    width: 100%;
    height: 30px;
    border-radius: 3px;
    border: 1px solid #fff;
    padding: 0 15px;
    line-height: 30px;
    text-align: left;
    box-sizing: border-box;
}
.select-btn button:hover {
    background-color: #30a471;
    box-shadow: 1px 1px 1px #ccc;
}
.select-btn .icon {
    float: right;
    position: relative;
    top: 2px;
    left: 8px;
}
.dropdown {
    width: 100%;
    background-color: #fff;
    border: 1px solid #aaa;
    color: #888;
    cursor: pointer;
    box-sizing: border-box;
}
.dropdown li {
    padding: 5px 10px;
    border-top: 1px solid #eee;
}
.dropdown li strong {
    font-weight: 600;
    line-height: 20px;
}
.dropdown li p {
    line-height: 16px;
    font-size: 8px;
}
.dropdown li:hover {
    background-color: #eeeeee;
}
.dropdown .add-project {
    line-height: 30px;
}
.dropdown .add-project .icon {
    position: relative;
    top: -2px;
}
</style>
