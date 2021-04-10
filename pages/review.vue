<template>
  <div class="container">
    <NuxtLink to="/">Back To Home</NuxtLink>
    <h1 class="title">{{ title }}</h1>
    <ul>
      <li>
        <header>
          <div>
            <img
              src="https://mikan.bita.jp//img/members_img/15857163963koudai_kudou_mikan.jpg"
              alt="プロフィール写真"
            />
          </div>
        </header>
        <article>
          <p>
            スシローに行ってきました！回転寿司にも関わらず、新鮮なネタが多くて美味しいです！
            <br />オススメは『えび3点盛り』ですね。3種類のえびを食べられて味は大満足。値段も170円(だった気がする)なので財布にも優しいのが推しポイントです。
            <br />五反田のスシローはかなり人気なので、昼も夜も予約を取らないと入れないのが難点です。
            <br />13時に予約を取ろうとすると30,40分待ちはざらにあるため、予約するタイミングは10時に出勤してすぐが良いです。
            <br />今度一緒にスシロー行きましょう！
          </p>
        </article>
        <ul>
          <li>
            <img
              src="https://ximg.retty.me/crop/s200x200/-/retty/img_repo/l/01/13914219.jpg"
              alt="店舗写真"
            />
          </li>
          <li>
            <img
              src="https://ximg.retty.me/crop/s200x200/-/retty/img_repo/l/01/13914223.jpg"
              alt="店舗写真"
            />
          </li>
          <li>
            <img
              src="https://ximg.retty.me/crop/s200x200/-/retty/img_repo/l/01/24430815.jpg"
              alt="店舗写真"
            />
          </li>
        </ul>
        <footer>
          <div>
            <img
              src="https://illust8.com/wp-content/uploads/2018/08/weather_sun_solar_illust_1080.png"
              alt="ランチ"
            />
          </div>
          <div>2021/04/11</div>
          <div>70いいね</div>
        </footer>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'review',
  data() {
    return {
      title: 'れびゅー一覧',
    }
  },
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
