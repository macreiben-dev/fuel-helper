import { createApp } from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

// --------------------------------

import routes from './routes.js'

console.log('starting ...');

// Vue.use(VueRouter)
const router = new VueRouter({routes});

var app = createApp(App);

app.use(router)
 
app.mount('#app')
