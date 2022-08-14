<template>
  <div class="side-bar">
    <button 
      class="landing-btn landing-btn-side landing-btn-signin"
      @click="btnCh=1"
    >로그인</button>
    <button
      class="landing-btn landing-btn-side landing-btn-signup"
      @click="btnCh=2"
    >회원가입</button>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useLandStore } from '@/stores/land/land'

export default {
  name: 'SideBar',
  setup() {
    const land = useLandStore()
    const { btnCh } = storeToRefs(land)
    return {
      land,
      btnCh
    }
  },
}
</script>

<style>
.side-bar {
  position: fixed;
  width: 80px;
  height: 100%;
  top: 0px;
  right: 0px;
  background: #030303;
  box-shadow: -12.8px 8.53333px 6.4px 6.4px rgba(0, 0, 0, 0.25);
}
.landing-btn {
  position: absolute;
  background: #A056FF;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
  color: white;
}
.landing-btn-side {
  width: 145px;
  height: 45px;
  cursor: pointer;
}
.landing-btn-signin {
  right: -20px;
  top: 24%;
}
.landing-btn-signup {
  right: -20px;
  top: calc(24% + 60px);;
}
.landing-btn-side:hover {
  transform: scale(1.05)
}
</style>