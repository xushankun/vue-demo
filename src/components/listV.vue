<template>
  <div class="demo-refresh-container">
    <!--下拉刷新-->
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
    <mu-list :activeTab = 'fTab'>
      <template v-for="(item,index) in list" :tabv="listTab">
        <mu-list-item :title="item.author.loginname" :afterText="item.tab" :describeLine="2" @click="details(index)">
          <mu-avatar :src="item.author.avatar_url" slot="leftAvatar"/>
          <span slot="describe">
          <span style="color: rgba(0, 0, 0, .87)">{{item.title}}</span>
          </span>
          <span style="display:inherit;width: 100%;color: #999;margin-top: 10px">{{item.last_reply_at}}</span>
        </mu-list-item>
        <mu-divider inset/>
      </template>
    </mu-list>
    <!--上拉加载-->
    <mu-infinite-scroll :scroller="scroller" :loading="loading"  @load="loadMore"/>
    <!--详情-->
    <listDetail :detailCont="detailCont"></listDetail>
  </div>
</template>

<script>
  import listDetail from '../components/listDetail'
  import Axios from 'axios'
  import API from '../api/API'
  const api = new API();
  export default {
      props:['fTab'],
    //2.此处注册组件
    components:{
      listDetail
    },
    data () {
      return {
        list:null,
        refreshing: false,
        trigger: null,
        loading: false,
        scroller: null,
        detailCont:{
          open: false,//详情页默认关闭
          title:null,
          content:null,
        },
        listParms:{
          page:1,
          tab:'all',    //all   good  weex  share  ask    job
          limit:10
        }
      }
    },
    mounted () {
      this.trigger = this.$el;
      this.scroller = this.$el;
      console.log('初始化。。。');
      this.refresh()
    },
    methods: {
      refresh () {
        let _that = this;
        let params = {
            page:_that.listParms.page,
            tab:_that.listParms.tab,
            limit:_that.listParms.limit
        };
        _that.refreshing = true;
        console.log('请求中。。。');
        setTimeout(() => {
          api.getList(params).then((res) => {
            _that.refreshing = false;
            _that.list = res.data.data;
            }).catch((err) => {
                console.log(err);
          });
          console.log('请求结束。。。');
        }, 1000);
      },
      loadMore () {
        console.log('我被拉倒底部触发了！');
        let _that = this;
        _that.listParms.page += 1;
        let params = {
          page:_that.listParms.page,
          tab:_that.listParms.tab,
          limit:_that.listParms.limit
        };
        console.log(_that.listParms.page);
        _that.loading = true;
        setTimeout(() => {
          console.log('上拉加载中。。。');
          api.getList(params).then((res) => {
            // 请求成功后关闭moreloading，加载数据
            _that.loading = false;
            _that.list = _that.list.concat(res.data.data);//concat()追加数组到已有数组上
          }).catch((err) => {
            console.log(err);
          });
          console.log('加载完毕！');
        }, 1000);
      },
      details:function (i) {
        let _that = this;
        _that.detailCont.title = _that.list[i].title;
        _that.detailCont.content = _that.list[i].content;
        _that.detailCont.open = !_that.detailCont.open;
      },
    },
    watch:{
      'fTab':function () {
        this.listParms.tab = this.fTab;
        this.listParms.page = 1;
        this.refresh()
      }
    }
  }
</script>

<style>
  .demo-refresh-container{
    width: 100%;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    /*border: 1px solid #d9d9d9;*/
    position: relative;
    user-select: none;
  }
  .mu-content-block{
    padding: 0!important;
    height: 100%;
  }
  .mu-item-content{
    text-align: left;
  }

</style>
