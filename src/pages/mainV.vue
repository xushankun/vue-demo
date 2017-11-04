<template>
  <div class="layout">
    <div class="header">
      <div class="nav">
        <mu-tabs :value="activeTab" @change="handleTabChange" class="tab">
          <mu-tab value="all" title="全部"/>
          <mu-tab value="good" title="精华"/>
          <mu-tab value="weex" title="weex"/>
          <mu-tab value="share" title="分享"/>
          <mu-tab value="ask" title="问答"/>
          <mu-tab value="job" title="招聘"/>
        </mu-tabs>
      </div>
    </div>
    <div class="content">
      <div class="body">
        <mu-content-block>
          <listV :fTab="activeTab"></listV>
        </mu-content-block>
      </div>
    </div>

  </div>
</template>
<script>
  //1.此处导入组件
  import listV from '../components/listV'
  export default {
    //2.此处注册组件
    components:{
      listV
    },
    data () {
      return {
        activeTab: 'all'
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val;
        console.log(this.activeTab);
      }
    }
  }
</script>
<style scoped>
  .content .body{
    min-height: inherit;
  }
  .layout{
    background-color: rgb(236, 236, 236);
    height: 100%;
  }

  .header{
    background-color: #0086f1;
    text-align: center;
  }

  .logo{
    font-size: 24px;
    color: white;
    display: inline-block;
    padding: 10px 20px;
  }

  .nav{
    display: inline-block;
    width: 90%;
    margin: 0 auto;
  }
  .tab{
    /*margin: 0 auto;*/
    /*width: 400px;*/
    min-width: 300px;
    background-color: rgba(0, 0, 0, 0);
  }

  .content{
    width: 100%;
    height: calc(100% - 48px);
    margin: 0 auto;
  }

  .breadcrumb{
    margin: 10px 0;
  }

  .body{
    background-color: white;
    border-radius: 5px;
    min-height: 500px;
    height: 100%;
  }

  .footer{
    padding: 20px 0;
    text-align: center;
  }
</style>
