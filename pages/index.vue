<template>
  <main class="top">
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
              <dt>経度</dt>
              <dd class="restaurantInfo__name">
                {{ restaurant.longitude }}
              </dd>
              <dt>緯度</dt>
              <dd class="restaurantInfo__name">
                {{ restaurant.latitude }}
              </dd>
            </dl>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      currentLocation: {
        latitude: 0,
        longitude: 0,
      },
      nearRestaurants: [],
    }
  },
  created() {
    this.getCurrentLocation().then(this.getNearRestaurant())
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
          console.error('err:', err)
        })
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
}

.top__heading {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
  color: #dc1214;
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
}

.restaurantInfo:hover {
  opacity: 0.7;
}

.restaurantInfo__name {
  font-size: 20px;
  padding: 20px;
  font-weight: bold;
}

.restaurantInfo__image {
  text-align: center;
  &::after {
    content: '';
  }
}
</style>
