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
        this.registerGlobalComponents();
        this.initVue();
    }

    loadStaticResources() {
        const style = import(/* webpackChunkName: "style" */ './assets/loaders/style-loader');

        return Promise.all([style]);
    }

    registerGlobalComponents() {
        const requireComponent = require.context(
            './views/components/common',
            false,
            /\.vue$/
        );

        requireComponent.keys().forEach(fileName => {
            // Get component config
            const componentConfig = requireComponent(fileName);
            const componentName = fileName.replace('./', '').replace('.vue', '');

            // Register component globally
            Vue.component(
                componentName,
                componentConfig.default || componentConfig
            );
        });
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
