<template>
  <div class="container">
    <div class="inner">
      <h1 class="logo">
        <img class="logo__img" src="/logo.png" alt="ロゴ" />
      </h1>
      <a
        class="login"
        :href="`https://hackathon-starter-305913.an.r.appspot.com/auth/google`"
        >ログイン</a
      >
    </div>
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
}

.logo {
  cursor: pointer;
  height: 150px;
  width: 150px;
  margin: 0 auto 30px;
}

.logo__img {
  height: 150px;
  width: 150px;
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
