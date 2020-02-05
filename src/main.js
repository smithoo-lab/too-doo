import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './stores';
import i18n from './i18n';
import filters from './filters';
import api from './api';

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

        // register global filters
        Object.keys(filters).forEach((key) => {
            Vue.filter(key, filters[key]);
        });

        Vue.prototype.$api = api;

        new Vue({
            router,
            store,
            i18n,
            render: h => h(App),
        }).$mount('#app');
    }
}

new TooDoo().bootstrap();
