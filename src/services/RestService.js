import axios from "axios";

export default {
  getThreads() {
    return axios.get(
      "https://www.reddit.com/r/AskReddit/top.json?sort=top&t=mont&limit=100"
    );
  },
  getThread(id) {
    return axios.get(`https://www.reddit.com/r/AskReddit/comments/${id}.json`);
  }
};
