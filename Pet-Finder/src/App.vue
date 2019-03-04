<template>
  <div id="app">
    <div id="nav" class="row" style="padding-left:18%">
      <img alt="Vue logo" src="/home/vimanga/Documents/Projects/Vue/Pet-Finder/src/assets/petfinder_logo.png" />    
      <router-link :to="{name: 'home'}" style="padding-left:8%">Breads</router-link>
      <router-link :to="{name: 'resources'}" style="padding-left:8%">Resourses</router-link>
      <router-link :to="{name: 'findpet'}" style="padding-left:8%">Find Pet</router-link>
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
