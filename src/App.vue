<template>
  <div class="container">

  <nav class="nav">
    <li class="nav-item">
      <router-link class="nav-link" to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/help">Help</router-link>
    </li>
  </nav>
    <router-view></router-view>
  </div>

</template>
