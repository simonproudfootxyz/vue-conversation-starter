<template>
  <div>
    <ThreadItem v-for="thread in threads" :key="thread.id" :thread="thread" />
  </div>
</template>

<script>
import ThreadItem from "@/components/ThreadItem.vue";
import RestService from "@/services/RestService.js";

export default {
  name: "ThreadList",
  components: {
    ThreadItem
  },
  data() {
    return {
      threads: []
    };
  },
  created: function() {
    RestService.getThreads()
      .then(response => {
        const threads = response.data.data.children.map(thread => {
          return thread.data;
        });
        this.threads = threads;
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(`There was an error: ${error}`);
      });
  }
};
</script>

<style lang="scss" scoped>
</style>
