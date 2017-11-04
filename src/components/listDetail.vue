<template>
  <div class="detail-wrap">
    <!--详情-->
    <mu-drawer right :open="detailCont.open" :detailCont="detailCont">
      <mu-appbar :title="detailCont.title" class="detail-bar">
        <mu-icon-button @click.native="detailCont.open = false" icon="close" slot="left"/>
        <mu-icon-menu icon="more_vert" slot="right">
          <mu-menu-item title="收藏"/>
          <mu-menu-item title="我的收藏"/>
        </mu-icon-menu>
      </mu-appbar>
      <div class="detail-content">
        <mu-list-item v-html="detailCont.content"/>
        <!--返回顶部-->
        <mu-back-top/>
      </div>
    </mu-drawer>
  </div>
</template>

<script>
  export default {
    props:['detailCont'],
    data () {
      return {

      }
    }
  }
</script>
<style>
  /*详情*/
  .detail-wrap .mu-paper{
    width: 100%;
    overflow: hidden;
  }
  .detail-bar{
    position: absolute;
    top: 0;
  }
  .detail-content{
    margin-top: 56px;
    padding: 15px;
    height: calc(100% - 56px);
    overflow: scroll;
  }
  .markdown-text img{
    max-width: 100%;
  }
</style>
