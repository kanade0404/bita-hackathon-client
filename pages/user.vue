<template>
  <div class="container">
    <div class="usersMe">
      <div class="usersImg">
        <img src="https://placehold.jp/150x150.png" alt="サンプル画像" />
      </div>
      <div class="info">
        <p class="name">名前</p>
        <div class="likes">
          <span class="like" v-for="(item, index) in likes" :key="index">
            #{{ item }}
          </span>
        </div>
        <p class="description">
          自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介
        </p>
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

.name {
  font-size: 26px;
  font-weight: bold;
}

.likes {
  margin: 10px 0;
}

.like {
  display: inline-block;
  padding-right: 3px;
  margin-bottom: 5px;
}

.description {
  margin-top: 20px;
}
</style>
