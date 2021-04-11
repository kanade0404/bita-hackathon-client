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
          <div class="edit">
            <span class="edit__title">Name</span>
            <div v-if="">{{}}</div>
            <input class="edit__input" type="text" v-model="editUserName" />
          </div>
          <div class="edit">
            <span class="edit__title">tags</span>
            <input class="edit__input" type="text" />
          </div>
          <span class="like" v-for="(item, index) in likes" :key="index">
            #{{ item }}
          </span>
          <div class="edit edit--desc">
            <div class="edit__desc">description</div>
            <textarea class="edit__textarea" type="text" />
          </div>
          <button @click="changeProfile" class="submit">change</button>
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
      editUserName: '',
      editTags: [],
      editDescription: '',
      editImg: '',
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
  mounted() {
    this.editUserName = this.userData.profile ? this.userData.profile.name : ''
    this.editTags = this.userData.tags
    this.editImg = this.userData.profile ? this.userData.profile.picture : ''
  },
  computed: {
    ...mapState(['userData']),
    userName() {
      return this.userData.profile ? this.userData.profile.name : ''
    },
    setImg() {
      return this.userData.profile
        ? `data:image/png;base64,${this.userData.profile.picture}`
        : ''
    },
  },
  methods: {
    changeProfile() {
      this.$router.push('/user')
    },
  },
}
</script>

<style scoped lang="scss">
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

.edit {
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;

  &--desc {
    display: block;
    margin-bottom: 50px;
  }
}

.edit__title {
  display: inline-block;
  width: 70px;
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
}

.edit__input {
  border-radius: 4px;
  border: 1px solid #eee;
  padding: 8px;
  font-size: 14px;
}

.info {
  text-align: center;
  margin: 0 auto 50px;
  max-width: 800px;
}

.like {
  display: inline-block;
  padding-right: 3px;
  margin-bottom: 30px;
}

.edit__desc {
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
  margin-bottom: 10px;
}

.edit__textarea {
  border-radius: 4px;
  border: 1px solid #eee;
  padding: 8px;
  width: 300px;
  height: 100px;
}

.submit {
  background-color: #4169e1;
  color: #fff;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 4px;
  border: 1px solid #eee;
  height: 30px;
  width: 200px;
}
</style>
