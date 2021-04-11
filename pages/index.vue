<template>
  <main class="top">
    <Header />
    <div class="container">
      <section class="top__mainContent">
        <h2 class="top__heading">店舗選択</h2>
        <ul class="topRestaurantList">
          <li
            v-for="restaurant in nearRestaurants"
            :key="restaurant"
            class="topRestaurantList__item"
          >
            <dl class="restaurantInfo">
              <dt>店舗名</dt>
              <dd class="restaurantInfo__name">
                {{ restaurant.name }}
              </dd>
            </dl>
          </li>
          <li
            @click="handleModalOpen()"
            :key="restaurant"
            class="topRestaurantList__item"
          >
            <dl class="restaurantInfo">
              <dt>店舗名</dt>
              <dd class="restaurantInfo__name">スシロー</dd>
            </dl>
          </li>
          <li
            @click="handleModalOpen()"
            :key="restaurant"
            class="topRestaurantList__item"
          >
            <dl class="restaurantInfo">
              <dt>店舗名</dt>
              <dd class="restaurantInfo__name">雪月花</dd>
            </dl>
          </li>
          <li
            @click="handleModalOpen()"
            :key="restaurant"
            class="topRestaurantList__item"
          >
            <dl class="restaurantInfo">
              <dt>店舗名</dt>
              <dd class="restaurantInfo__name">らがん</dd>
            </dl>
          </li>
        </ul>
      </section>
    </div>
    <div v-show="isModalOpen" class="confirmModal">
      <div class="confirmModal__inner">
        <p class="confirmModal__title">店舗情報の登録が完了しました</p>
        <p class="confirmModal__title">レビューを書きますか？</p>
        <div class="confirmModal__buttonWrapper">
          <button class="button button--secondly" @click="toMatchScreen()">
            レビューを見る
          </button>
          <button class="button button--success" @click="toReportScreen()">
            レビューを書く
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import Header from '../components/common/Header'

export default {
  components: {
    Header,
  },
  data() {
    return {
      currentLocation: {
        latitude: 0,
        longitude: 0,
      },
      nearRestaurants: [],
      isModalOpen: false,
    }
  },
  created() {
    this.getNearRestaurant()
  },
  methods: {
    getLocation() {
      axios.defaults.headers.get['Content-Type'] =
        'application/json;charset=utf-8'
      axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'
      axios({
        method: 'get',
        url:
          'https://maps.googleapis.com/maps/api/place/findplacefromtext/json',
        data: {
          input: 'Museum%20of%20Contemporary%20Art%20Australia',
          key: '',
          inputtype: 'textquery',
        },
      })
    },
    async getCurrentLocation() {
      if (typeof window !== 'undefined') {
        await navigator.geolocation.getCurrentPosition((res) => {
          this.currentLocation.longitude = res.coords.longitude
          this.currentLocation.latitude = res.coords.latitude
        })
      }
    },
    async getNearRestaurant() {
      await axios({
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:8080',
        },
        method: 'get',
        url: 'http://localhost:8080/api/store',
      })
        .then((response) => {
          const { data } = response.data
          if (!data.length) {
            return Promise.reject(Error('empty data'))
          }
          data.forEach((element) => {
            this.nearRestaurants.push(element)
          })
        })
        .catch((err) => {
          Error(err)
        })
    },
    toMatchScreen() {
      this.handleModalOpen()
      this.$router.push('/match')
    },
    toReportScreen() {
      this.handleModalOpen()
      this.$router.push('/report')
    },
    handleModalOpen() {
      this.isModalOpen = !this.isModalOpen
    },
  },
}
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
img {
  vertical-align: bottom;
  width: 100%;
}

ul {
  list-style: none;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1000px;
  padding: 20px;
}

.top__heading {
  font-weight: 600;
  font-size: 1.2em;
  margin-bottom: 20px;
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 1px solid #d5d5d8;
}

.top__mainContent {
  width: 100%;
}

.topRestaurantList {
  margin: 0 auto;
}

.topRestaurantList__item {
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
}

.restaurantInfo {
  display: flex;
  align-items: center;
  border: 1px solid #000;
  transition: 0.2s;
  padding: 20px;
  cursor: pointer;
}

.restaurantInfo:hover {
  opacity: 0.7;
}

.restaurantInfo__name {
  font-size: 20px;
  margin-left: 20px;
  font-weight: bold;
}

.restaurantInfo__image {
  text-align: center;
  &::after {
    content: '';
  }
}

.confirmModal {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
}

.confirmModal__inner {
  background-color: #fff;
  padding: 20px;
}

.confirmModal__title {
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
}

.confirmModal__buttonWrapper {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.button {
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  font-size: 14px;
  background-color: #4169e1;
  font-weight: bold;
  color: #fff;
  &:not(:last-of-type) {
    margin-right: 12px;
  }
}

.button--secondly {
  background-color: #b0c4de;
}
</style>
