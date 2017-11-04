<template>
  <div id="app">
    <headerV v-on:signOut="recieveMessage"></headerV>
    <!--控制内容视图高度-->
    <div class="cont-high">
      <router-view></router-view>
      <router-view name="release"></router-view>
      <router-view name="message"></router-view>
      <router-view name="myv"></router-view>
    </div>
    <footerv></footerv>
  </div>
</template>

<script>
  //1.此处导入组件
  import headerV from './components/HeaderV'
  import footerv from './components/FooterV'
export default {
  name: 'app',
  data () {
      return{
         loginS:null,
      }
  },
  //2.此处注册组件
  components:{ headerV ,footerv},
  methods: {
    recieveMessage: function (text) {
      console.log('监听到子组件变化'+text);
      this.loginS = text;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*为了底部后加的*/
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
  .cont-high{
    height: calc(100% - 134px);
    overflow: hidden;
  }
.mu-tabs > .mu-tab-link{
  z-index: 999;
}
.mu-tab-link-highlight{
  height: 100%;
  opacity: 0.3;
}
</style>
