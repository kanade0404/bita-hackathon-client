<template>
  <Fragment>
    <Header />
    <div class="container">
      <div class="usersMe">
        <div class="usersImg">
          <img
            class="usersImg__img"
            :src="userData.picture"
            alt="サンプル画像"
          />
        </div>
        <div class="info">
          <p class="name">{{ userData.name }}</p>
          <div class="likes">
            <span v-for="(item, index) in likes" :key="index" class="like">
              #{{ item }}
            </span>
          </div>
          <p class="description">
            自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介
          </p>
        </div>
        <div class="editWrapper">
          <button class="edit" @click="toEditScreen">edit</button>
        </div>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { mapState } from 'vuex'
import Header from '../components/common/Header'

export default {
  components: { Header },
  data() {
    return {
      likes: [
        'モンスターハンター',
        '柿',
        '山',
        'お祈り',
        'Vue',
        'React',
        '初心者',
        'つながりたい',
      ],
    }
  },
  computed: {
    ...mapState(['userData']),
  },
  methods: {
    toEditScreen() {
      this.$router.push('/userEdit')
    },
  },
}
</script>

<style scoped>
.usersMe {
  margin: 50px auto 0;
}

.usersImg {
  overflow: hidden;
  border-radius: 150px;
  height: 150px;
  width: 150px;
  margin: 0 auto 50px;
}

.usersImg__img {
  height: 150px;
  width: 150px;
}

.info {
  text-align: center;
  margin: 0 auto 50px;
  max-width: 800px;
}

.name {
  font-size: 26px;
  font-weight: bold;
}

.likes {
  margin: 10px 0;
}

.like {
  font-size: 14px;
  display: inline-block;
  padding-right: 5px;
  margin-bottom: 5px;
}

.description {
  padding: 0 10px;
  font-size: 14px;
  margin-top: 20px;
}

.editWrapper {
  margin: 0 auto;
  max-width: 800px;
}

.edit {
  border-radius: 4px;
  background-color: royalblue;
  color: #fff;
  margin-left: auto;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 30px;
  width: 50px;
}
</style>
