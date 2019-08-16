<template>
  <div>
    <p>{{ this.body }}</p>
    <p>{{ this.author }}</p>
    <p>{{ this.score }}</p>
  </div>
</template>

<script>
export default {
  name: "Reply",
  props: {
    author: String,
    body: String,
    score: Number
  }
};
</script>

<style lang="scss" scoped>
</style>
