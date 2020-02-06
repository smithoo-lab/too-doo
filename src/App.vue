<template>
    <div id="app">
        <app-header></app-header>
        <main>
            <router-view/>
        </main>
    </div>
</template>

<script>
import AppHeader from '@/views/components/app-header/AppHeader.vue';
export default {
    components: { AppHeader },
};
</script>
