<template>
  <div class="container">
    <div class="usersMe">
      <div class="usersImg">
        <img src="https://placehold.jp/150x150.png" alt="サンプル画像" />
      </div>
      <div class="info">
        <div class="edit">
          <span class="edit__title">Name:</span>
          <input class="edit__input" type="text" />
        </div>
        <div class="edit">
          <span class="edit__title">tags:</span>
          <input class="edit__input" type="text" />
        </div>
        <span class="like" v-for="(item, index) in likes" :key="index">
          #{{ item }}
        </span>
        <div class="edit">
          <div class="edit__desc">description:</div>
          <textarea class="edit__textarea" type="text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: [
        '好きなもの',
        '好きなもの',
        '好きなもの',
        '好きなもの',
        '好きなもの',
        '好きなもの',
        '好きなもの',
        '好きなもの',
        '好きなもの',
        '好きなもの',
        '好きなもの',
        '好きなもの',
      ],
    }
  },
}
</script>

<style scoped>
.usersMe {
  display: flex;
  justify-content: center;
  margin: 100px auto 0;
  width: 800px;
}

.usersImg {
  flex: 1 0 auto;
  overflow: hidden;
  border-radius: 150px;
  height: 150px;
  width: 150px;
  margin-right: 50px;
}

.edit {
  align-items: center;
  display: flex;
  margin-bottom: 10px;
}

.edit__title {
  display: inline-block;
  width: 70px;
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
}

.edit__input {
  border-radius: 4px;
  border: 1px solid #eee;
  padding: 8px;
  font-size: 14px;
}

.like {
  display: inline-block;
  padding-right: 3px;
  margin-bottom: 5px;
}

.edit__desc {
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
}

.edit__textarea {
  border-radius: 4px;
  border: 1px solid #eee;
  padding: 8px;
  width: 300px;
  height: 100px;
}
</style>
