<template>
  <div class="container">
    <a class="login" href="http://localhost:8080/auth/google">ログイン</a>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.login {
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #4169e1;
  height: 40px;
  width: 200px;
}
</style>
