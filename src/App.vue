<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{ hello }}</h1>
    <ThreadList />
  </div>
</template>

<script>
import ThreadList from './components/ThreadList.vue'

// the stuff below essentially controls the template tags output
export default {
  name: 'app',
  data() {
    return {
      hello: "Conversation Starter"
    }
  },
  components: {
    ThreadList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
