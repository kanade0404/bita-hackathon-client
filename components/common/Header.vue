<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="headerLinks">
        <li class="link"><NuxtLink to="/login">To Login</NuxtLink></li>
        <li class="link"><NuxtLink to="/logout">To Logout</NuxtLink></li>
        <li class="link"><NuxtLink to="/report">To Report</NuxtLink></li>
        <li class="link"><NuxtLink to="/review">To Review</NuxtLink></li>
        <li class="login" @click="login">ログイン</li>
      </ul>
    </nav>
  </header>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Header',
  methods: {
    login() {
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
      const res = axios.get('http://localhost:8080/auth/google')
      console.log(res)
    },
  },
}
</script>

<style scoped>
.header {
  display: flex;
  height: 80px;
}

.header__nav {
  display: flex;
  align-items: center;
}

.headerLinks {
  display: flex;
  list-style: none;
}

.link:not(:last-of-type) {
  margin-right: 20px;
}

.login {
  cursor: pointer;
}
</style>
