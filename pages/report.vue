<template>
  <main class="report">
    <div class="container">
      <form action="" method="post">
        <fieldset class="reviewForm">
          <legend>店舗レビュー</legend>
          <input type="textarea" name="content" value="" />
        </fieldset>
        <input type="hidden" name="userId" value="" />
        <input type="hidden" name="reviewId" value="" />
        <button type="submit">投稿する</button>
      </form>
    </div>
  </main>
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

.reviewForm {
  margin-bottom: 20px;
}
</style>
