import Vue from 'vue';
import VueRouter from 'vue-router';

import NotFound from '../pages/NotFound';

import User from '../pages/User';
import UserList from '../components/UserList';
import UserAdd from '../components/UserAdd';
import UserEdit from '../components/UserEdit';
import SingleUser from '../components/SingleUser';

import Product from '../pages/Product';
import ProductList from '../components/ProductList';
import ProductAdd from '../components/ProductAdd';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/user',
            component: User,
            children: [
                {
                    path: 'list',
                    component: UserList
                },
                {
                    path: 'add',
                    component: UserAdd
                },
                {
                    path: 'edit/:id',
                    component: UserEdit,
                    props: true
                },
                {
                    path:':id',
                    component: SingleUser,
                    props: true
                }
            ]
        },
        {
            path: '/product',
            component: Product,
            children: [
                {
                    path: 'list',
                    component: ProductList
                },
                {
                    path: 'add',
                    component: ProductAdd
                }
            ]
        },
        {
            path: '*',
            component: NotFound
        }
    ],
    mode: 'history'
})