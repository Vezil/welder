import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/pages/Home';
import About from '../components/pages/About';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
];

const router = new VueRouter({
    routes
});

export default router;
