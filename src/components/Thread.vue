<template>
  <div>
    <h1>{{ title }}</h1>
    <Reply
      v-for="comment in comments"
      :key="comment.id"
      :author="comment.author"
      :body="comment.body"
      :score="comment.score"
    />
  </div>
</template>

<script>
import Reply from "@/components/Reply.vue";
import RestService from "@/services/RestService.js";
export default {
  name: "Thread",
  props: {
    id: String
  },
  components: {
    Reply
  },
  data() {
    return {
      title: "",
      comments: []
    };
  },
  created: function() {
    RestService.getThread(this.id)
      .then(response => {
        const threadInfo = response.data
          .filter(set => set.data.children[0].kind === "t3")
          .map(info => info.data.children)[0];
        // eslint-disable-next-line no-console
        const threadTitle = threadInfo[0].data.title;
        const repliesSet = response.data.filter(
          set => set.data.children[0].kind !== "t3"
        );
        const replies = repliesSet
          .map(set => set.data.children)[0]
          .map(reply => reply.data);
        this.title = threadTitle;
        this.comments = replies;
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
