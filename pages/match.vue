<template>
  <Fragment>
    <Header />
    <div class="container">
      <NuxtLink to="/">Back To Home</NuxtLink>
      <h1 class="title">レビューリスト</h1>
      <ul class="reviewItemList">
        <li v-for="review in reviewList" :key="review" class="reviewItemCard">
          <div class="cardHeader">
            <div class="profileImgWrapper">
              <img
                class="profileImg"
                src="https://mikan.bita.jp//img/members_img/15857163963koudai_kudou_mikan.jpg"
                alt="プロフィール写真"
              />
            </div>
            <div>
              <div class="userName">{{ userName }}</div>
              <div class="rating">
                評価 :
                <span class="ratingStar">★★★</span>
              </div>
            </div>
          </div>
          <div class="reviewWrapper">
            <div class="reviewSentenceWrapper">
              <p class="reviewSentence">
                スシローに行ってきました！回転寿司にも関わらず、新鮮なネタが多くて美味しいです！
                オススメは『えび3点盛り』ですね。3種類のえびを食べられて味は大満足。値段も170円(だった気がする)なので財布にも優しいのが推しポイントです。
                五反田のスシローはかなり人気なので、昼も夜も予約を取らないと入れないのが難点です。
                13時に予約を取ろうとすると30,40分待ちはざらにあるため、予約するタイミングは10時に出勤してすぐが良いです。
                今度一緒にスシロー行きましょう！
              </p>
            </div>
            <ul class="photoImageList">
              <li class="photoImageItemWrapper">
                <img
                  class="photoImageItem"
                  src="https://ximg.retty.me/crop/s200x200/-/retty/img_repo/l/01/13914219.jpg"
                  alt="店舗写真"
                />
              </li>
              <li class="photoImageItemWrapper">
                <img
                  class="photoImageItem"
                  src="https://ximg.retty.me/crop/s200x200/-/retty/img_repo/l/01/13914223.jpg"
                  alt="店舗写真"
                />
              </li>
              <li class="photoImageItemWrapper">
                <img
                  class="photoImageItem"
                  src="https://ximg.retty.me/crop/s200x200/-/retty/img_repo/l/01/24430815.jpg"
                  alt="店舗写真"
                />
              </li>
            </ul>
          </div>
          <div class="footerWrapper">
            <div class="footerImgWrapper">
              <img
                class="footerImg"
                src="https://illust8.com/wp-content/uploads/2018/08/weather_sun_solar_illust_1080.png"
                alt="ランチ"
              />
            </div>
            <div class="postedDate">2021/04/11</div>
            <div class="favoriteNumber">70いいね</div>
          </div>
        </li>
      </ul>
    </div>
  </Fragment>
</template>

<script>
import Header from '../components/common/Header'
export default {
  name: 'Match',
  components: { Header },
  data() {
    return {
      userName: '工藤 昂大',
      reviewList: [1, 2, 3, 4, 5],
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-decoration: none;
  padding: 0 20px 20px;
}

.title {
  font-weight: 600;
  font-size: 1.2em;
  margin-top: 10px;
}

.reviewItemList {
  border-top: 1px solid #d5d5d8;
  margin-top: 10px;
}
.reviewItemCard {
  border-bottom: 1px solid #d5d5d8;
  padding: 10px 0;
}

.cardHeader {
  display: flex;
}
.profileImgWrapper {
  height: 10vw;
  margin-right: 10px;
}
.profileImg {
  height: 100%;
  border-radius: 50%;
}
.userName {
  color: #2e2e3b;
  font-size: 1.07692rem;
  font-weight: 700;
  margin-bottom: 3px;
}
.rating {
  color: #6c6c75;
  font-size: 0.85rem;
}
.ratingStar {
  color: #e00031;
}

.reviewWrapper {
  margin-top: 10px;
}
.reviewSentenceWrapper {
  position: relative;
  line-height: 1.35;
  max-height: calc(1.35em * 2);
  overflow: hidden;
  font-size: 0.85rem;
  color: #2e2e3b;

  &::before {
    content: '…';
    bottom: 0;
    right: 0;
    position: absolute;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 40%
    );
    padding-left: 1em;
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    margin-left: -1em;
    position: absolute;
    background: #fff;
  }
}
.photoImageList {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  margin-top: 10px;
}
.photoImageItemWrapper {
  height: 30vw;
  margin-right: 10px;
}
.photoImageItem {
  height: 100%;
}

.footerWrapper {
  color: #6c6c75;
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  margin-top: 18px;
}
.footerImgWrapper {
  height: 3vh;
  margin-right: 5px;
}
.footerImg {
  height: 100%;
}
.postedDate {
  margin-right: 5px;
}
.favoriteNumber {
  margin-right: 5px;
}
</style>
