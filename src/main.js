import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './stores';

class TooDoo {
    async bootstrap() {
        await this.loadStaticResources();
        this.initVue();
    }

    loadStaticResources() {
        const style = import(/* webpackChunkName: "style" */ './assets/loaders/style-loader');

        return Promise.all([style]);
    }

    initVue() {
        Vue.config.productionTip = false;

        new Vue({
            router,
            store,
            render: h => h(App),
        }).$mount('#app');
    }
}

new TooDoo().bootstrap();
