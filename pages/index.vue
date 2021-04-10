<template>
  <main class="top">
    <div class="container">
      <section class="top__mainContent">
        <h2 class="top__heading">店舗選択</h2>
        <ul class="topRestaurantList">
          <li class="topRestaurantList__item">
            <figure class="restaurantInfo">
              <p class="restaurantInfo__image">
                <img src="https://via.placeholder.com/100" alt="" />
              </p>
              <figcaption class="restaurantInfo__name">
                経度{{ currentLocation.longitude }}
              </figcaption>
              <figcaption class="restaurantInfo__name">
                緯度{{ currentLocation.latitude }}
              </figcaption>
            </figure>
          </li>
          <li class="topRestaurantList__item">
            <figure class="restaurantInfo">
              <p class="restaurantInfo__image">
                <img src="https://via.placeholder.com/100" alt="" />
              </p>
              <figcaption class="restaurantInfo__name">店舗名</figcaption>
            </figure>
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
    }
  },
  created() {
    this.getCurrentLocation()
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
