<template>
  <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab to="/" value="tab1" icon="home" title="首页"/>
    <mu-tab to="/release" value="tab2" icon="edit" title="发布"/>
    <mu-tab to="/Message" value="tab3" icon="message" title="消息"/>
    <mu-tab to="/myv" value="tab4" icon="person" title="我的"/>
  </mu-tabs>
</template>

<script>
  export default {
    data () {
      return {
        activeTab: 'tab1'
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      }
    }
  }
</script>
