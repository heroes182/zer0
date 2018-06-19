import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
// import VueResource from 'vue-resource';
import App from './App.vue';
import routes from './routes';


Vue.use(VueResource);
Vue.use(VueRouter);
// Vue.use(VueResource);

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({ // eslint-disable-line no-new
    el: '#app',
    router,
    render: h => h(App)
});
