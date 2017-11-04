<template>
  <mu-appbar class="header-tit" title="Vue.js中文社区">
    <mu-icon-button icon="close" slot="left"/>
    <mu-icon-menu icon="more_vert" slot="right">
      <mu-menu-item title="关于"/>
      <mu-menu-item title="设置"/>
      <mu-menu-item @click="signOut" title="退出"/>
    </mu-icon-menu>
  </mu-appbar>
</template>
<script>
  export default{
      data(){
        return {
          loginState: ''
        }
      },
      methods:{
          signOut () {
            this.$store.commit('failF');
            this.loginState = this.$store.state.login;
            this.$emit('signOut', this.loginState);
            console.log(this.loginState);
          }
      }
  }
</script>
<style  >

.header-tit{
  text-align: center;
}
</style>
