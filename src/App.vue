<template>
  <div id="app">
    <router-link :to="{ name: 'home' }">
      <img alt="Vue logo" src="./assets/logo.png" />
    </router-link>
    <h1>{{ hello }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
// the stuff below essentially controls the template tags output
export default {
  name: "app",
  data() {
    return {
      hello: "Conversation Starter"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
