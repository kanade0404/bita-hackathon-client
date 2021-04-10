<template>
  <div class="container">
    <div class="link"><NuxtLink to="/login">To Login</NuxtLink></div>
    <div class="link"><NuxtLink to="/logout">To Logout</NuxtLink></div>
    <div class="link"><NuxtLink to="/report">To Report</NuxtLink></div>
    <div class="link"><NuxtLink to="/review">To Review</NuxtLink></div>
    <div @click="getLocation">Button</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    getLocation() {
      axios.defaults.headers.get['Content-Type'] =
        'application/json;charset=utf-8'
      axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'
      axios({
        method: 'get',
        url:
          'https://maps.googleapis.com/maps/api/place/findplacefromtext/json',
        data: {
          input: 'Museum%20of%20Contemporary%20Art%20Australia',
          key: '',
          inputtype: 'textquery',
        },
      })
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &::after {
    content: '';
  }
}
</style>
