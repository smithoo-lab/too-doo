<template>
    <header class="navbar navbar-dark bg-primary">
        <a class="navbar-brand" href="#">TOODOO</a>
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
