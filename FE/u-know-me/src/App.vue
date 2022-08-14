<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
html, body, #app {
  overflow: hidden;
}
div, p, span, button, label {
  font-family: '1';
}
button {
  width: 130px;
  height: 40px;
  padding: 10px 25px;
  border: 2px solid #A056FF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  overflow: hidden;
  -webkit-tap-highlight-color : transparent;
}
button:hover {
  background: #C699FF;
  color: #fff;
}
button:before {
  position: absolute;
  display: inline-block;
  top: -180px;
  left: 0;
  width: 30px;
  height: 100%;
  background-color: #fff;
  animation: shiny-btn1 3s ease-in-out infinite;
}
button:active{
  background: #ceaff9;
  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.3),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, .2);
}
/* Font */
@font-face {
  font-family:'1';
  src: url('assets/fonts/NanumSquareRoundR.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'2';
  src: url('assets/fonts/NanumSquareR.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'3';
  src: url('assets/fonts/NanumPen.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'4';
  src: url('assets/fonts/NanumMyeongjo-YetHangul.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'5';
  src: url('assets/fonts/NanumMyeongjoEco.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'6';
  src: url('assets/fonts/NanumMyeongjo.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'7';
  src: url('assets/fonts/NanumGothicEco.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'8';
  src: url('assets/fonts/NanumGothic.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'9';
  src: url('assets/fonts/NanumBrush.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'10';
  src: url('assets/fonts/NanumBarunpenR.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'11';
  src: url('assets/fonts/NanumBarunGothic-YetHangul.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'12';
  src: url('assets/fonts/NanumBarunGothic.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'13';
  src: url('assets/fonts/MaruBuri-Regular.ttf') format('truetype');
  font-weight: 400;
}
/* clova-all */
@font-face {
  font-family:'c-1';
  src: url('assets/fonts/clova-all/가람연꽃/나눔손글씨 가람연꽃.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-2';
  src: url('assets/fonts/clova-all/갈맷글/나눔손글씨 갈맷글.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-3';
  src: url('assets/fonts/clova-all/갈혜준체/나눔손글씨 혜준체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-4';
  src: url('assets/fonts/clova-all/강부장님체/나눔손글씨 강부장님체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-5';
  src: url('assets/fonts/clova-all/강인한_위로/나눔손글씨 강인한 위로.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-6';
  src: url('assets/fonts/clova-all/고딕_아니고_고딩/나눔손글씨 고딕 아니고 고딩.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-7';
  src: url('assets/fonts/clova-all/고려글꼴/나눔손글씨 고려글꼴.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-8';
  src: url('assets/fonts/clova-all/곰신체/나눔손글씨 곰신체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-9';
  src: url('assets/fonts/clova-all/규리의_일기/나눔손글씨 규리의 일기.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-10';
  src: url('assets/fonts/clova-all/금은보화/나눔손글씨 금은보화.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-11';
  src: url('assets/fonts/clova-all/기쁨밝음/나눔손글씨 기쁨밝음.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-12';
  src: url('assets/fonts/clova-all/김유이체/나눔손글씨 김유이체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-13';
  src: url('assets/fonts/clova-all/꽃내음/나눔손글씨 꽃내음.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-14';
  src: url('assets/fonts/clova-all/끄트머리체/나눔손글씨 끄트머리체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-15';
  src: url('assets/fonts/clova-all/나는_이겨낸다/나눔손글씨 나는 이겨낸다.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-16';
  src: url('assets/fonts/clova-all/나무정원/나눔손글씨 나무정원.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-17';
  src: url('assets/fonts/clova-all/나의_아내_손글씨/나눔손글씨 나의 아내 손글씨.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-18';
  src: url('assets/fonts/clova-all/노력하는_동희/나눔손글씨 노력하는 동희.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-19';
  src: url('assets/fonts/clova-all/느릿느릿체/나눔손글씨 느릿느릿체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-20';
  src: url('assets/fonts/clova-all/다시_시작해/나눔손글씨 다시 시작해.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-21';
  src: url('assets/fonts/clova-all/다진체/나눔손글씨 다진체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-22';
  src: url('assets/fonts/clova-all/다채사랑/나눔손글씨 다채사랑.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-23';
  src: url('assets/fonts/clova-all/다행체/나눔손글씨 다행체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-24';
  src: url('assets/fonts/clova-all/달의궤도/나눔손글씨 달의궤도.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-25';
  src: url('assets/fonts/clova-all/대광유리/나눔손글씨 대광유리.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-26';
  src: url('assets/fonts/clova-all/대한민국_열사체/나눔손글씨 대한민국 열사체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-27';
  src: url('assets/fonts/clova-all/동화또박/나눔손글씨 동화또박.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-28';
  src: url('assets/fonts/clova-all/둥근인연/나눔손글씨 둥근인연.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-29';
  src: url('assets/fonts/clova-all/따뜻한_작별/나눔손글씨 따뜻한 작별.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-30';
  src: url('assets/fonts/clova-all/따악단단/나눔손글씨 따악단단.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-31';
  src: url('assets/fonts/clova-all/딸에게_엄마가/나눔손글씨 딸에게 엄마가.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-32';
  src: url('assets/fonts/clova-all/또박또박/나눔손글씨 또박또박.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-33';
  src: url('assets/fonts/clova-all/마고체/나눔손글씨 마고체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-34';
  src: url('assets/fonts/clova-all/맛있는체/나눔손글씨 맛있는체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-35';
  src: url('assets/fonts/clova-all/몽돌/나눔손글씨 몽돌.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-36';
  src: url('assets/fonts/clova-all/무궁화/나눔손글씨 무궁화.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-37';
  src: url('assets/fonts/clova-all/무진장체/나눔손글씨 무진장체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-38';
  src: url('assets/fonts/clova-all/미니_손글씨/나눔손글씨 미니 손글씨.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-39';
  src: url('assets/fonts/clova-all/미래나무/나눔손글씨 미래나무.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-40';
  src: url('assets/fonts/clova-all/바른정신/나눔손글씨 바른정신.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-41';
  src: url('assets/fonts/clova-all/바른히피/나눔손글씨 바른히피.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-42';
  src: url('assets/fonts/clova-all/반짝반짝_별/나눔손글씨 반짝반짝 별.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-43';
  src: url('assets/fonts/clova-all/배은혜체/나눔손글씨 배은혜체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-44';
  src: url('assets/fonts/clova-all/백의의_천사/나눔손글씨 백의의 천사.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-45';
  src: url('assets/fonts/clova-all/버드나무/나눔손글씨 버드나무.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-46';
  src: url('assets/fonts/clova-all/범솜체/나눔손글씨 범솜체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-47';
  src: url('assets/fonts/clova-all/부장님_눈치체/나눔손글씨 부장님 눈치체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-48';
  src: url('assets/fonts/clova-all/북극성/나눔손글씨 북극성.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-49';
  src: url('assets/fonts/clova-all/비상체/나눔손글씨 비상체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-50';
  src: url('assets/fonts/clova-all/빵구니맘_손글씨/나눔손글씨 빵구니맘 손글씨.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-51';
  src: url('assets/fonts/clova-all/사랑해_아들/나눔손글씨 사랑해 아들.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-52';
  src: url('assets/fonts/clova-all/상해찬미체/나눔손글씨 상해찬미체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-53';
  src: url('assets/fonts/clova-all/성실체/나눔손글씨 성실체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-54';
  src: url('assets/fonts/clova-all/세계적인_한글/나눔손글씨 세계적인 한글.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-55';
  src: url('assets/fonts/clova-all/세아체/나눔손글씨 세아체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-56';
  src: url('assets/fonts/clova-all/세화체/나눔손글씨 세화체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-57';
  src: url('assets/fonts/clova-all/소미체/나눔손글씨 소미체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-58';
  src: url('assets/fonts/clova-all/소방관의_기도/나눔손글씨 소방관의 기도.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-59';
  src: url('assets/fonts/clova-all/손편지체/나눔손글씨 손편지체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-60';
  src: url('assets/fonts/clova-all/수줍은_대학생/나눔손글씨 수줍은 대학생.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-61';
  src: url('assets/fonts/clova-all/시우_귀여워/나눔손글씨 시우 귀여워.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-62';
  src: url('assets/fonts/clova-all/신혼부부/나눔손글씨 신혼부부.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-63';
  src: url('assets/fonts/clova-all/아기사랑체/나눔손글씨 아기사랑체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-64';
  src: url('assets/fonts/clova-all/아름드리_꽃나무/나눔손글씨 아름드리 꽃나무.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-65';
  src: url('assets/fonts/clova-all/아빠글씨/나눔손글씨 아빠글씨.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-66';
  src: url('assets/fonts/clova-all/아빠의_연애편지/나눔손글씨 아빠의 연애편지.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-67';
  src: url('assets/fonts/clova-all/아인맘_손글씨/나눔손글씨 아인맘 손글씨.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-68';
  src: url('assets/fonts/clova-all/아줌마_자유/나눔손글씨 아줌마 자유.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-69';
  src: url('assets/fonts/clova-all/안쌍체/나눔손글씨 안쌍체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-70';
  src: url('assets/fonts/clova-all/암스테르담/나눔손글씨 암스테르담.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-71';
  src: url('assets/fonts/clova-all/야근하는_김주임/나눔손글씨 야근하는 김주임.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-72';
  src: url('assets/fonts/clova-all/야채장수_백금례/나눔손글씨 야채장수 백금례.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-73';
  src: url('assets/fonts/clova-all/엄마사랑/나눔손글씨 엄마사랑.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-74';
  src: url('assets/fonts/clova-all/엉겅퀴체/나눔손글씨 엉겅퀴체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-75';
  src: url('assets/fonts/clova-all/여름글씨/나눔손글씨 여름글씨.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-76';
  src: url('assets/fonts/clova-all/연지체/나눔손글씨 연지체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-77';
  src: url('assets/fonts/clova-all/열아홉의_반짝임/나눔손글씨 열아홉의 반짝임.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-78';
  src: url('assets/fonts/clova-all/열일체/나눔손글씨 열일체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-79';
  src: url('assets/fonts/clova-all/예당체/나눔손글씨 예당체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-80';
  src: url('assets/fonts/clova-all/예쁜_민경체/나눔손글씨 예쁜 민경체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-81';
  src: url('assets/fonts/clova-all/옥비체/나눔손글씨 옥비체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-82';
  src: url('assets/fonts/clova-all/와일드/나눔손글씨 와일드.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-83';
  src: url('assets/fonts/clova-all/외할머니글씨/나눔손글씨 외할머니글씨.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-84';
  src: url('assets/fonts/clova-all/왼손잡이도_예뻐/나눔손글씨 왼손잡이도 예뻐.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-85';
  src: url('assets/fonts/clova-all/우리딸_손글씨/나눔손글씨 우리딸 손글씨.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-86';
  src: url('assets/fonts/clova-all/유니_띵땅띵땅/나눔손글씨 유니 띵땅띵땅.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-87';
  src: url('assets/fonts/clova-all/의미있는_한글/나눔손글씨 의미있는 한글.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-88';
  src: url('assets/fonts/clova-all/자부심지우/나눔손글씨 자부심지우.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-89';
  src: url('assets/fonts/clova-all/잘하고_있어/나눔손글씨 잘하고 있어.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-90';
  src: url('assets/fonts/clova-all/장미체/나눔손글씨 장미체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-91';
  src: url('assets/fonts/clova-all/점꼴체/나눔손글씨 점꼴체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-92';
  src: url('assets/fonts/clova-all/정은체/나눔손글씨 정은체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-93';
  src: url('assets/fonts/clova-all/중학생/나눔손글씨 중학생.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-94';
  src: url('assets/fonts/clova-all/진주_박경아체/나눔손글씨 진주 박경아체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-95';
  src: url('assets/fonts/clova-all/철필글씨/나눔손글씨 철필글씨.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-96';
  src: url('assets/fonts/clova-all/초딩희망/나눔손글씨 초딩희망.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-97';
  src: url('assets/fonts/clova-all/칼국수/나눔손글씨 칼국수.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-98';
  src: url('assets/fonts/clova-all/코코체/나눔손글씨 코코체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-99';
  src: url('assets/fonts/clova-all/하나되어_손글씨/나눔손글씨 하나되어 손글씨.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-100';
  src: url('assets/fonts/clova-all/하나손글씨/나눔손글씨 하나손글씨.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-101';
  src: url('assets/fonts/clova-all/하람체/나눔손글씨 하람체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-102';
  src: url('assets/fonts/clova-all/한윤체/나눔손글씨 한윤체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-103';
  src: url('assets/fonts/clova-all/할아버지의나눔/나눔손글씨 할아버지의나눔.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-104';
  src: url('assets/fonts/clova-all/행복한_도비/나눔손글씨 행복한 도비.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-105';
  src: url('assets/fonts/clova-all/혁이체/나눔손글씨 혁이체.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-106';
  src: url('assets/fonts/clova-all/효남_늘_화이팅/나눔손글씨 효남 늘 화이팅.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-107';
  src: url('assets/fonts/clova-all/희망누리/나눔손글씨 희망누리.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-108';
  src: url('assets/fonts/clova-all/흰꼬리수리/나눔손글씨 흰꼬리수리.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family:'c-109';
  src: url('assets/fonts/clova-all/힘내라는_말보단/나눔손글씨 힘내라는 말보단.ttf') format('truetype');
  font-weight: 400;
}
</style>
