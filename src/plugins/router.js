import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import D2 from '../pages/D2.vue';
import D3 from '../pages/D3.vue';
import Illustration from '../pages/Illustration.vue';
import Contact from '../pages/Contact.vue';
import { paths } from "../libs/defaultValues";



Vue.use(VueRouter)

const routes = [
  {
    path: paths.home, component: Home, name: 'Home'
  },
  {
    path: paths.d2, component: D2, name: 'D2'
  },
  {
    path: paths.d3, component: D3, name: 'D3'
  },
  {
    path: paths.illustration, component: Illustration, name: 'Illustration'
  },
  {
    path: paths.contact, component: Contact, name: 'Contact'
  },
]

  export default new VueRouter({
    mode: 'history',
    routes: routes
  })