<template>
  <Fragment>
    <Header />
    <div class="container">
      <NuxtLink to="/">Back To Home</NuxtLink>
      <div class="selectTypeTab">
        <div
          class="title"
          :class="{ isActive: showListFlag }"
          @click="selectListType('common')"
        >
          Match!
        </div>
        <div
          class="title"
          :class="{ isActive: !showListFlag }"
          @click="selectListType('uncommon')"
        >
          Not match
        </div>
      </div>
      <div v-show="showListFlag">
        <transition-group name="richUi" tag="ul" class="matchItemList">
          <li
            v-for="commonMatchUser in commonMatchList"
            :key="commonMatchUser.id"
            class="matchItemCard"
          >
            <div class="cardInner">
              <div class="profileImgWrapper">
                <img
                  class="profileImg"
                  src="https://mikan.bita.jp/img/members_img/16019679213tatsuya_takahashi_mikan.jpg"
                  :alt="commonMatchUser.user.picture"
                />
              </div>
              <div>
                <div class="userName">{{ commonMatchUser.user.name }}</div>
              </div>
              <div class="matchNumber">9</div>
            </div>
          </li>
          <li
            v-for="commonMatchUser in commonMatchList"
            :key="commonMatchUser.id"
            class="matchItemCard"
          >
            <div class="cardInner">
              <div class="profileImgWrapper">
                <img
                  class="profileImg"
                  src="https://mikan.bita.jp/img/members_img/16097438781toshinobu_sato_mikan.jpg"
                  :alt="commonMatchUser.user.picture"
                />
              </div>
              <div>
                <div class="userName">{{ commonMatchUser.user.name }}</div>
              </div>
              <div class="matchNumber">6</div>
            </div>
          </li>
          <li
            v-for="commonMatchUser in commonMatchList"
            :key="commonMatchUser.id"
            class="matchItemCard"
          >
            <div class="cardInner">
              <div class="profileImgWrapper">
                <img
                  class="profileImg"
                  src="https://mikan.bita.jp/img/members_img/15656647750seiya_sakata_mikan.jpg"
                  :alt="commonMatchUser.user.picture"
                />
              </div>
              <div>
                <div class="userName">{{ commonMatchUser.user.name }}</div>
              </div>
              <div class="matchNumber">5</div>
            </div>
          </li>
          <li
            v-for="commonMatchUser in commonMatchList"
            :key="commonMatchUser.id"
            class="matchItemCard"
          >
            <div class="cardInner">
              <div class="profileImgWrapper">
                <img
                  class="profileImg"
                  src="https://mikan.bita.jp/img/members_img/15656647750seiya_sakata_mikan.jpg"
                  :alt="commonMatchUser.user.picture"
                />
              </div>
              <div>
                <div class="userName">{{ commonMatchUser.user.name }}</div>
              </div>
              <div class="matchNumber">3</div>
            </div>
          </li>
          <li
            v-for="commonMatchUser in commonMatchList"
            :key="commonMatchUser.id"
            class="matchItemCard"
          >
            <div class="cardInner">
              <div class="profileImgWrapper">
                <img
                  class="profileImg"
                  src="https://mikan.bita.jp/img/members_img/15656647750seiya_sakata_mikan.jpg"
                  :alt="commonMatchUser.user.picture"
                />
              </div>
              <div>
                <div class="userName">{{ commonMatchUser.user.name }}</div>
              </div>
              <div class="matchNumber">2</div>
            </div>
          </li>
          <li
            v-for="commonMatchUser in commonMatchList"
            :key="commonMatchUser.id"
            class="matchItemCard"
          >
            <div class="cardInner">
              <div class="profileImgWrapper">
                <img
                  class="profileImg"
                  src="https://mikan.bita.jp/img/members_img/15656647750seiya_sakata_mikan.jpg"
                  :alt="commonMatchUser.user.picture"
                />
              </div>
              <div>
                <div class="userName">{{ commonMatchUser.user.name }}</div>
              </div>
              <div class="matchNumber">1</div>
            </div>
          </li>
        </transition-group>
      </div>
      <div v-show="!showListFlag">
        <ul class="matchItemList">
          <li
            v-for="uncommonMatchUser in uncommonMatchList"
            :key="uncommonMatchUser.id"
            class="notMatchItemCard"
          >
            <div class="notMatchCardHeader">
              <div class="notMatchProfileWrapper">
                <img
                  class="profileImg"
                  src="https://mikan.bita.jp/img/members_img/15226410800makoto_tatsumi_mikan.jpg"
                  :alt="uncommonMatchUser.user.picture"
                />
              </div>
              <div class="userName">まことさん</div>
            </div>
            <ul class="commonTagsList">
              <li
                v-for="commonProfile in commonProfiles"
                :key="commonProfile"
                class="commonTagItem"
              >
                出身地が近い
              </li>
            </ul>
          </li>
          <li
            v-for="uncommonMatchUser in uncommonMatchList"
            :key="uncommonMatchUser.id"
            class="notMatchItemCard"
          >
            <div class="notMatchCardHeader">
              <div class="notMatchProfileWrapper">
                <img
                  class="profileImg"
                  src="https://mikan.bita.jp/img/members_img/15857163963koudai_kudou_mikan.jpg"
                  :alt="uncommonMatchUser.user.picture"
                />
              </div>
              <div class="userName">工藤 昂大</div>
            </div>
            <ul class="commonTagsList">
              <li
                v-for="commonProfile in commonProfiles"
                :key="commonProfile"
                class="commonTagItem"
              >
                ボードゲーム
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </Fragment>
</template>

<script>
import axios from 'axios'
import Header from '../components/common/Header'

export default {
  name: 'Match',
  components: { Header },
  data() {
    return {
      commonMatchList: [],
      uncommonMatchList: [],
      showListFlag: true,
      commonProfiles: [1, 2, 3, 4],
    }
  },
  created() {
    axios
      .get('https://hackathon-starter-305913.an.r.appspot.com/api/review/')
      .then((result) => {
        this.commonMatchList = result.data.data
        this.uncommonMatchList = result.data.data
      })
      .catch((error) => {
        alert(error.message)
      })
  },
  methods: {
    selectListType(showListType) {
      this.showListFlag = showListType === 'common'
    },
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

.selectTypeTab {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}
.title {
  font-weight: 600;
  font-size: 1.2em;
  padding-bottom: 5px;

  &.isActive {
    border-bottom: 3px solid #ff8856;
  }
}
.richUi-move {
  transition: 1s;
}
.matchDisplay-enter {
  position: relative;
  top: 10px;
  opacity: 0;
}
.matchDisplay-enter-active {
  opacity: 0.5;
}
.matchDisplay-leave {
  top: 0;
  opacity: 1;
}
.matchDisplay-leave-active {
  top: 10px;
  opacity: 0.5;
}

.matchItemList {
  border-top: 1px solid #d5d5d8;
}

.matchItemCard {
  border-bottom: 1px solid #d5d5d8;
  padding: 10px 15px;
  box-shadow: 0 0 6px #ddd;
  margin: 15px 0;
  border-radius: 5px;
}
.notMatchItemCard {
  border-bottom: 1px solid #d5d5d8;
  padding: 10px 15px 10px;
  box-shadow: 0 0 6px #ddd;
  margin: 15px 0;
  border-radius: 5px;
  min-height: 57.5px;
}
.cardInner {
  display: flex;
  align-items: center;
}
.notMatchCardHeader {
  display: flex;
  align-items: center;
}
.profileImgWrapper {
  height: 15vw;
  margin-right: 10px;
}
.notMatchProfileWrapper {
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
.matchNumber {
  border-radius: 50%;
  background-color: #ff8856;
  color: #fff;
  font-weight: 600;
  width: 20px;
  height: 20px;
  text-align: center;
  margin-left: auto;
  padding-top: 1px;
}

.commonTagsList {
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
}
.commonTagItem {
  color: #ff773e;
  background-color: #ffefe0;
  border-radius: 10px;
  padding: 4px 6px;
  font-weight: 600;
  font-size: 80%;
  margin: 2.5px;
}
</style>
