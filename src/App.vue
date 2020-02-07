<template>
    <div id="app" class="app">
        <div class="content">
            <app-header></app-header>
            <main>
                <router-view/>
            </main>
        </div>
    </div>
</template>

<script>
import AppHeader from '@/views/components/app-header/AppHeader.vue';
export default {
    components: { AppHeader },
};
</script>

<style scoped>
.app {
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
}

.content {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    background-color: #f8f9fa;
    min-width: 0;
}

main {
    flex: 1;
    overflow: auto;
    min-width: 0;
}
</style>
