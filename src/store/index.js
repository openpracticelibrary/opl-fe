import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: {},
  },
  mutations: {
    updatePosts(state, data) {
      this.state.posts = data;
    },
  },
  actions: {
  },
  getters: {
    getPostById: (state) => (id) => state.posts.find((n) => n.id === id),
  },
  modules: {
  },
});
