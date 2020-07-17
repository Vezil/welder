import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/pages/Home';
import About from '../components/pages/About';
import i18n from '../i18n';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: `/${i18n.locale}`
    },
    {
        path: '/:lang',
        component: {
            render(c) {
                return c('router-view');
            }
        },
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: 'about',
                name: 'about',
                component: About
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
