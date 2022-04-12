import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'


Vue.use(Vuex)

const persistedstate = createPersistedState({
  paths: ["newsList"]
})

export default new Vuex.Store({
  plugins: [persistedstate],
  state: {
    newsList: [],
  },
  mutations: {
    setNewsList(state, payload) {
      state.newsList = payload
    }
  },
  actions: {
    fetchNews(store, keyword) {
      axios.get("https://newsapi.org/v2/everything?q="+ keyword + "&apiKey=a088ce87f18f40b89adfaa23fd3c7c4e").then((response) => {
        store.commit("setNewsList", response.data.articles)
      })
    }
  }
})

