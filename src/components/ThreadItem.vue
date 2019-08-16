<template>
  <div>
    <router-link class :to="{ name: 'thread', params: { id: thread.id } }">{{ thread.title }}</router-link>
  </div>
</template>

<script>
export default {
  name: "ThreadItem",
  props: {
    thread: Object
  }
};
</script>

<style lang="scss" scoped>
</style>
