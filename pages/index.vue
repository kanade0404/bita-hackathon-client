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
              <figcaption class="restaurantInfo__name">店舗名</figcaption>
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
export default {}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1000px;
}

.top__heading {
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
  margin-bottom: 20px;
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
  font-weight: bold;
}

.restaurantInfo__image {
  margin-right: 20px;
}
</style>
