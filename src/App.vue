<template>
  <div id="app">
    <div class="btn1" @click='stopBgChange'>点击停止</div>
    <div class="btn2" @click='startBgChange'>点击开始</div>
  </div>
</template>

<script>
import BgChange from './bgchange.js'
export default {
  name: 'app',
  data () {
    return {
      bgchange: null
    }
  },
  methods: {
    stopBgChange(){
      this.bgchange.stop();
    },
    startBgChange(){
      this.bgchange.start();
    }
  },
  mounted(){
    this.bgchange = new BgChange({
      // image: true,
      colorList: [
        'rgba(78, 56, 32, .8)',
        'rgba(70, 30, 45, .8)',
        'rgba(78, 56, 32, .8)',
        'rgba(89, 100, 105, .8)'
      ]
    }).start();
  }
}
</script>

<style>
  html,body{
    width: 100%;
    height: 100%;
  }
  .btn1{
    position: absolute;
    top: 10%;
    right: 10%;
    width: 100px;
    height: 30px;
    font-size: 20px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    background-color: green;
  }
  .btn2{
    position: absolute;
    top: 20%;
    right: 10%;
    width: 100px;
    height: 30px;
    font-size: 20px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    background-color: green;
  }
</style>
