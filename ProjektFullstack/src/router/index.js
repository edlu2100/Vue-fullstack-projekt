import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductView from '../views/ProductView.vue'
import CategoryView from '../views/CategoryView.vue'
import LoginView from '../views/LoginView.vue'
import UserView from '../views/UserView.vue'
import AddproductsView from '../views/AddproductsView.vue'
import AddusersView from '../views/AddusersView.vue'
import EditproductView from '../views/EditproductView.vue'
import AddCategoryView from '../views/AddCategoryView.vue'
import CategoryIdView from '../views/CategoryIdView.vue'
import ProfileView from '../views/ProfileView.vue'
import RestockView from '../views/RestockView.vue'
import SaleView from '../views/SaleView.vue'
import UpdateImageView from '../views/UpdateImageView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'Login',
            component: LoginView
        },
        {
            path: '/home',
            name: 'home ',
            component: HomeView,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('token')) {
                    next()
                } else {
                    next('/')
                }
            }
        },
        {
            path: '/Products',
            name: 'Products ',
            component: ProductsView,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('token')) {
                    next()
                } else {
                    next('/')
                }
            }
        },
        {
            path: '/products/:id',
            name: 'product ',
            component: ProductView,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('token')) {
                    next()
                } else {
                    next('/')
                }
            }
        },
        {
            path: '/products/Edit/:id',
            name: 'Editproduct ',
            component: EditproductView,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('token')) {
                    next()
                } else {
                    next('/')
                }
            }
        },
        {
            path: '/updateImage/:id',
            name: 'updateImage ',
            component: UpdateImageView,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('token')) {
                    next()
                } else {
                    next('/')
                }
            }
        },
        {
            path: '/categories',
            name: 'categories ',
            component: CategoryView,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('token')) {
                    next()
                } else {
                    next('/')
                }
            }
        },
        {
            path: '/addCategory',
            name: 'addCategory ',
            component: AddCategoryView,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('token')) {
                    next()
                } else {
                    next('/')
                }
            }
        },
        {
            path: '/category/:id',
            name: 'category',
            component: CategoryIdView,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('token')) {
                    next()
                } else {
                    next('/')
                }
            }
        },
        {
            path: '/users',
            name: 'user ',
            component: UserView,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('token')) {
                    next()
                } else {
                    next('/')
                }
            }
        },
        {
            path: '/AddProduct',
            name: 'AddProduct ',
            component: AddproductsView,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('token')) {
                    next()
                } else {
                    next('/')
                }
            }
        },
        {
            path: '/AddUser',
            name: 'AddUser ',
            component: AddusersView,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('token')) {
                    next()
                } else {
                    next('/')
                }
            }
        },
        {
            path: '/Profile',
            name: 'Profile ',
            component: ProfileView,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('token')) {
                    next()
                } else {
                    next('/')
                }
            }
        },
        {
            path: '/products/Restock/:id',
            name: 'Restock',
            component: RestockView,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('token')) {
                    next()
                } else {
                    next('/')
                }
            }
        },
        {
            path: '/products/Sale/:id',
            name: 'Sale',
            component: SaleView,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('token')) {
                    next()
                } else {
                    next('/')
                }
            }
        },


    ]
})

export default router