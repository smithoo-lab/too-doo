<template>
    <header>
        <div class="app-logo">
            <a href="#">TOODOO</a>
        </div>
        <project-select></project-select>
        <search></search>
        <auth-button></auth-button>
    </header>
</template>

<script>
import ProjectSelect from './ProjectSelect.vue';
import Search from './Search.vue';
import AuthButton from './AuthButton.vue';

export default {
    components: { ProjectSelect, Search, AuthButton },
};
</script>

<style scoped>
header {
    height: 60px;
    background-color: #41b883;
    box-shadow: 2px 0px 4px #aaa;
    color: white;
    padding: 0 30px;
    font-size: 14px;
    z-index: 1000;
}
.app-logo {
    float: left;
}
header a {
    font-size: 20px;
    letter-spacing: 3px;
    color: white;
    font-weight: 600;
    line-height: 60px;
}
header a:hover {
    text-decoration: none;
}
</style>
