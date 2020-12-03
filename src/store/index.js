import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios').default

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bloggerId: '2635306558877561821',
    clientId: '230917203185-irqtphrkmr9o6pjmaeiq1mal89vrk00l.apps.googleusercontent.com',
    clientSecret: 'WtQOeT7Mh5AlwZZ5HGefozk7',
    apiKey: 'AIzaSyCokZna64OZdkWm_LdQ5L3OuUuyDgHrQC8',
    blogData: null,
    blogPosts: [],
    blogPost: null,
    nextPageToken: null,
    postPerPage: 4
  },
  mutations: {
    SET_BLOG_DATA: (state, data) => {
      state.blogData = data
    },
    SET_BLOG_POSTS: (state, data) => {
      state.blogPosts = data
    },
    PUSH_BLOG_POSTS: (state, data) => {
      data.forEach(post => {
        state.blogPosts.push(post)
      })
    },
    SET_BLOG_POST: (state, data) => {
      state.blogPost = data
    },
  },
  actions: {
    async getPostz ({ state }) {
      let v2 = `https://www.googleapis.com/blogger/v2/blogs/${state.bloggerId}/posts/?key=${state.apiKey}`
      const body = {
        key: state.apiKey
      }
      let uri = `https://www.googleapis.com/blogger/v2/blogs/${state.bloggerId}/posts?callback=handleResponse&key=${state.apiKey}&client_id=${state.clientId}`
      let url = `https://www.blogger.com/feeds/${state.bloggerId}/posts/default?alt=json`
      let proxy = 'https://cors-anywhere.herokuapp.com/'
      console.log(v2)
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      let result = await response.json()

      console.log(result)
    },
    async getBlog ({ state, commit }) {
      const url = `https://www.googleapis.com/blogger/v3/blogs/${state.bloggerId}?key=${state.apiKey}`
      axios.get(url)
        .then(res => {
          commit('SET_BLOG_DATA', res.data)
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    async getPosts ({ state, commit }) {
      const url = `https://www.googleapis.com/blogger/v3/blogs/${state.bloggerId}/posts?key=${state.apiKey}&fetchImages=true&maxResults=${state.postPerPage}`
      axios.get(url)
        .then(res => {
          commit('SET_BLOG_POSTS', res.data.items)
          if(res.data && res.data.nextPageToken) {
            state.nextPageToken = res.data.nextPageToken
          } else {
            state.nextPageToken = null
          }
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    async nextPosts ({ state, commit }) {
      // state.blogPosts = []
      const url = `https://www.googleapis.com/blogger/v3/blogs/${state.bloggerId}/posts?key=${state.apiKey}&fetchImages=true&maxResults=${state.postPerPage}&pageToken=${state.nextPageToken}`
      axios.get(url)
        .then(res => {
          commit('PUSH_BLOG_POSTS', res.data.items)
          if(res.data && res.data.nextPageToken) {
            state.nextPageToken = res.data.nextPageToken
          } else {
            state.nextPageToken = null
          }
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    async getPost ({ state, commit }, postID ) {
      state.blogPost = null
      const url = `https://www.googleapis.com/blogger/v3/blogs/${state.bloggerId}/posts/${postID}?key=${state.apiKey}&fetchImages=true`
      axios.get(url)
        .then(res => {
          commit('SET_BLOG_POST', res.data)
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  modules: {
  }
})
