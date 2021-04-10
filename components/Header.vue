<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="headerLinks">
        <li class="link"><NuxtLink to="/login">To Login</NuxtLink></li>
        <li class="link"><NuxtLink to="/logout">To Logout</NuxtLink></li>
        <li class="link"><NuxtLink to="/report">To Report</NuxtLink></li>
        <li class="link"><NuxtLink to="/reviwe">To Review</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
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
</style>
