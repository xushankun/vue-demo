<template>
  <div class="login-box">
      <mu-card v-if="loginB">
        <mu-card-title title="用户信息" subTitle="Content Title"/>
        <mu-card-header :title="userInfo.loginname" :subTitle="userInfo.id">
          <mu-avatar :src="userInfo.avatar_url" slot="avatar"/>
        </mu-card-header>
        <mu-card-text>
          散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
        </mu-card-text>
        <mu-card-actions>
          <mu-flat-button label="Action 1"/>
          <mu-flat-button label="Action 2"/>
        </mu-card-actions>
      </mu-card>
    <div class="login-block" v-else="loginB">
      <div class="login-form">
        <mu-text-field class="login-input" v-model="accessT" label="accessToken" hintText="请输入密钥" type="text" labelFloat icon="lock_outline"/>
        <mu-raised-button label="Login" class="demo-raised-button" @click="loginF"/>
      </div>
      <mu-card class="info-text">
        <mu-card-title title="AccessToken说明" subTitle="Content Title"/>
        <mu-card-text>
          官方网站登录后，在设置页面可以看到自己的accessToken。将accessToken复制，粘贴到文本框，即可登录。
        </mu-card-text>
      </mu-card>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  import API from '../api/API'
  const api = new API();
  export default {
    data () {
      return {
        snackbar: false,
        toast: false,
        msg:'',
        loginB:false,
        userInfo:null,
        userData:null,
        accessT: ''
      }
    },
    methods:{
      loginSuccess () {
         this.$store.commit('successF');
          this.loginB = this.$store.state.login;
      },
      loginF () {
        let _that = this;
        if(_that.accessT === ''){
            alert('您的输入不能为空！')
        }else {
          _that.loginRe ();
        }
      },
      loginRe () {
        let _that = this;
        let params = {
          accesstoken: _that.accessT,
        };
        api.loginF(params).then((res) => {
            if(res.data.success){
              _that.loginSuccess();
              _that.loginB = this.$store.state.login;
              localStorage.setItem('userInfo',JSON.stringify(res.data));
              _that.userInfo = JSON.parse(localStorage.getItem('userInfo'));
              console.log(_that.userInfo);
            }else {
              _that.loginB = false;
              _that.msg = res.data.error_msg;
            }

          }).catch((err) => {
          console.log(err);
        });
      }
    },
    mounted: function () {
      this.loginB = this.$store.state.login;
      var _that = this;
      if(this.$store.state.login){
        _that.userInfo = JSON.parse(localStorage.getItem('userInfo'));
      }else{
        _that.userInfo = null;
      }
    }
  }
</script>

<style lang="css">
  .login-form{
    margin: 30px 0 20px 0;
  }
  .demo-raised-button {
    margin: 12px;
  }
  .info-text{
    width: 92%;
    margin: 0 auto;
  }
</style>


