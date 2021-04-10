<template>
  <div>
    <header v-if="hasUserData" class="header">
      <nav class="header__nav">
        <ul class="headerLinks">
          <h1 class="logo" @click="toHomeScreen">
            <img class="logo__img" src="/logo.png" alt="ロゴ" />
          </h1>
          <div class="userName">{{ userName }}</div>
          <div class="iconWrapper">
            <div class="icon" @click="setMenuOpen">
              <img class="icon__img" :src="userData.picture" alt="" />
            </div>
          </div>
        </ul>
      </nav>
      <div v-show="isMenuVisible" class="tabMenuWrapper">
        <div class="tabMenu__background" @click="setMenuClose"></div>
        <ul class="tabMenu">
          <li class="tabMenu__link" @click="toHomeScreen">Home</li>
          <li class="tabMenu__link" @click="toReviewScreen">レビュー一覧</li>
          <li class="tabMenu__link" @click="toUserScreen">ユーザー情報</li>
          <li class="tabMenu__link" @click="logout">ログアウト</li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      isMenuVisible: false,
    }
  },
  computed: {
    ...mapState(['userData']),
    userName() {
      return this.userData.name
    },
    setImg() {
      return `data:image/png;base64,${this.userData.picture}`
    },
    hasUserData() {
      return this.userData.id
    },
  },
  async mounted() {
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'

    const url = new URL(window.location)
    const userId = url.searchParams.get('userId')
    const initToken = url.searchParams.get('token')
    const token = this.$cookies.get('token')
    if (token) {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/user/${userId}`
        )
        this.setUserActions(data.data)
        return
      } catch (error) {
        alert('処理に失敗しました')
      }
    }

    if (!userId || !initToken) return

    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/user/${userId}`
      )
      this.setUserActions(data.data)
      this.$cookies.set('token', initToken)
    } catch (error) {
      alert('処理に失敗しました')
    }
  },
  methods: {
    ...mapActions(['setUserActions']),
    setMenuOpen() {
      this.isMenuVisible = true
      document.body.style.overflow = 'hidden'
    },
    setMenuClose() {
      this.isMenuVisible = false
      document.body.style.overflow = ''
    },
    toUserScreen() {
      this.setMenuClose()
      this.$router.push('/user')
    },
    toReviewScreen() {
      this.setMenuClose()
      this.isMenuVisible = false
      this.$router.push('/review')
    },
    logout() {
      this.$cookies.set('token', '')
      window.location = 'http://localhost:8080/logout'
    },
    toHomeScreen() {
      this.setMenuClose()
      this.$router.push('/')
    },
  },
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  height: 80px;
  padding: 0 20px;
  margin: 0 auto;
}

.header__nav {
  width: 100%;
}

.headerLinks {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  height: 100%;
}

.logo {
  cursor: pointer;
  margin-right: auto;
  height: 50px;
  width: 50px;
}

.logo__img {
  height: 50px;
  width: 50px;
}

.link:not(:last-of-type) {
  margin-right: 20px;
}

.userName {
  font-size: 16px;
  font-weight: bold;
  margin-right: 8px;
}

.iconWrapper {
  position: relative;
}

.icon {
  cursor: pointer;
  overflow: hidden;
  border-radius: 50px;
  height: 50px;
  width: 50px;
}

.icon__img {
  width: 50px;
  height: 50px;
}

.tabMenuWrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
}

.tabMenu {
  padding: 0 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tabMenu__link {
  background-color: #fff;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 50px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 5px;
  z-index: 100;
}

.tabMenu__background {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
}
</style>
