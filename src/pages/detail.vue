<template>
  <div>
    <mu-raised-button label="下面弹出" @click="open('bottom')"/>
    <mu-popup position="bottom" popupClass="demo-popup-bottom" :open="bottomPopup" @close="close('bottom')">
      <mu-appbar title="弹出">
        <mu-flat-button slot="right" label="关闭" color="white" @click="close('bottom')"/>
      </mu-appbar>
      <mu-content-block>
        <p>
          Popup 弹出框组件，可以从上下左右四个方位弹出，也可以直接渐变透明度显示，弹出框的宽度高度需要自己设置
        </p>
        <p>
          散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
        </p>
      </mu-content-block>
    </mu-popup>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        bottomPopup: false
      }
    },
    methods: {
      open (position) {
        this[position + 'Popup'] = true
      },
      close (position) {
        this[position + 'Popup'] = false
      }
    },
    watch: {
      topPopup (val) {
        if (val) {
          setTimeout(() => {
            this.topPopup = false
          }, 2000)
        }
      }
    }
  }
</script>

<style lang="css">
  .demo-popup-bottom {
    width: 100%;
    max-width: 375px;
  }
</style>
