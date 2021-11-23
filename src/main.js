import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

// --------------------------------
// Includes bootstrap here.
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/styles/computationgrid.css"
import "./assets/styles/formcontrol.css"
import "./assets/styles/grid.css"

// --------------------------------

import routes from './routes.js'

console.log('starting ...');

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

var app = createApp(App);

console.log('app created.');

app.use(router)
 
console.log('router is set.');

app.mount('#app')

console.log('app is mounted.');