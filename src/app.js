import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import routes from './routes';
import App from './App.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({ // eslint-disable-line no-new
    el: '#app',
    router,
    render: h => h(App)
});
