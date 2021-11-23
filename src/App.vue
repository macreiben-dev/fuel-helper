<template>
  <div class="container">

  <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/help">Help</router-link>
      </li>
    </ul>
  <router-view></router-view>
  </div>
</template>
<style>
@import './assets/styles/grid.css';
@import './assets/styles/formcontrol.css';
</style>
