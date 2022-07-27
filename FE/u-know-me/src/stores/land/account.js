import { defineStore } from 'pinia'
import sr from '@/api/spring-rest'
import router from '@/router'
import axios from 'axios'

export const useAccountStore = defineStore('account', {
  state: () => ({
    token: '',
    currentUser: {},
    profile: {},
    authError: null,
    isAdmin: false,
  }),
  getters: {
    isLoggedIn: state => !!state.token,
    authHeader: state => ({ Authorization: `Token ${state.token}`}),
  },
  actions: {
    saveToken(token) {
      this.token = token
      localStorage.setItem('token', token)
    },
    removeToken() {
      this.token = ''
      localStorage.setItem('token', '')
    },
    login(credentials) {
      axios({
        url: sr.accounts.login(),
        method: 'post',
        data: credentials
      })
        .then(res => {
          const token = res.data.key
          this.saveToken(token)
          this.fetchCurrentUser()
          this.fetchIsAdmin(credentials)
          router.push({ name: 'home' })
        })
        .catch(err => {
          console.error(err.response.data)
          this.authError = err.response.data
        })
    },
    signup(credentials, birth) {
      if (birth.day.length === 1) {
        birth.day = '0'+ birth.day
      }
      credentials.birth = birth.year.slice(-2) + birth.month + birth.day
      console.log({...credentials})
      // axios({
      //   url: sr.members.signup(),
      //   method: 'post',
      //   data: credentials
      // })
      //   .then(res => {
      //     const token = res.data.key
      //     console.log(token)
          // this.saveToken(token)
          // this.fetchCurrentUser()
          // router.push({ name: 'home' })
        // })
        // .catch(err => {
        //   console.error(err.response.data)
        //   this.authError = err.response.data
        // })
    },
    logout() {
      axios({
        url: sr.accounts.logout(),
        method: 'post',
        // data: {},
        headers: this.authHeader,
      })
        .then(() => {
          this.removeToken()
          this.isAdmin = false
          router.push({ name: 'home' })
        })
        .error(err => {
          console.error(err.response)
        })
    },
    fetchCurrentUser() {
      if (this.isLoggedIn) {
        axios({
          url: sr.accounts.currentUserInfo(),
          method: 'get',
          headers: this.authHeader,
        })
          .then(res => {
            this.currentUser = res.data
          })
          .catch(err => {
            if (err.response.status == 401) {
              this.removeToken()
              router.push({ name: 'home' })
            }
          })
      }
    },
    fetchProfile({ username }) {
      axios({
        url: sr.accounts.profile(username),
        method: 'get',
        headers: this.authHeader,
      })
        .then(res => {
          this.profile = res.data
        })
        .catch(err => {
          console.error(err.response)
        })
    },
    fetchIsAdmin({ username }) {
      axios({
        url: sr.accounts.isAdmin(username),
        method: 'get',
        headers: this.authHeader,
      })
        .then(res => {
          this.isAdmin = res.data.is_supersuser
        })
        .catch(err => {
          console.error(err.response)
        })
    }
  },
})