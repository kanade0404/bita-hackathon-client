<template>
  <Fragment>
    <Header />
    <main class="report">
      <div class="container">
        <form
          class="reviewForm"
          action="http://localhost:8080/api/review"
          method="post"
        >
          <fieldset class="reviewForm__item">
            <legend class="reviewForm__title">店舗レビュー</legend>
            <textarea
              type="text"
              name="content"
              value=""
              class="reviewForm__inputTextarea"
            />
          </fieldset>
          <input type="hidden" name="userId" value="" />
          <input type="hidden" name="reviewId" value="" />
          <button class="reviewForm__submitButton" type="submit">
            投稿する
          </button>
        </form>
      </div>
    </main>
  </Fragment>
</template>

<script>
import Header from '../components/common/Header'

export default {
  components: {
    Header,
  },
}
</script>

<style lang="scss" scoped>
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
  width: 80%;
  max-width: 600px;
}

.reviewForm__item {
  display: flex;
  align-items: center;
}

.reviewForm__title {
  font-size: 24px;
  font-weight: bold;
  flex-shrink: 0;
  margin-bottom: 20px;
}

.reviewForm__inputTextarea {
  border-radius: 4px;
  border: 1px solid #eee;
  padding: 8px;
  height: 3em;
  font-size: 16px;
  width: 100%;
  resize: vertical;
}

.reviewForm__submitButton {
  margin-top: 40px;
  background-color: #4169e1;
  width: 200px;
  height: 40px;
  color: #fff;
  border-radius: 100px;
  font-weight: bold;
}
</style>
