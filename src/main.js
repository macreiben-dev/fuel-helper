import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

// --------------------------------

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// --------------------------------

import routes from './routes.js'



console.log('starting ...');

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

var app = createApp(App);

app.use(router)
 
app.mount('#app')
