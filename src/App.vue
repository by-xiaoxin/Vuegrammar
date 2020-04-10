<template>
  <div id="app">
    <img src="./assets/logo.png">
	<!-- <img src={require('./assets/logo.png')} alt="" className="imgall"/> -->
    <!-- <HelloWorld></HelloWorld> -->
    <Newfile :asd="msg" @aimer="getMsg"></Newfile>
     <!-- <template>
        <p slot="sb">hp</p>
        <p slot="cdd">cdd</p>
        <p slot="hp">dp</p>
      </template> -->
    <button @click="Mth">Mths</button>
    <ul v-for="item in ths"> <!-- 循环 -->
        <!-- <li>{{item.id}}</li> -->
        <li>{{item.name}}</li>
        <!-- <li>{{item.psd}}</li> -->
    </ul>
    <!-- 我显示的地方 -->
    <router-view></router-view>
    <el-row>
      <el-button disabled>默认按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info" disabled>信息按钮</el-button>
      <el-button type="warning" disabled>警告按钮</el-button>
      <el-button type="danger" disabled>危险按钮</el-button>
    </el-row>
<!-- 分割线 -->
  </div>
</template>

<script>
  import Newfile from './components/New_file.vue'
  
  export default {
    name: 'App',
    components: {
      Newfile,
      // HelloWorld

    },
    data() {
      return {
        msg: "猫じゃらし",
        ths: []
      }
    },
    methods: {
	  getMsg(data) {
		  console.log(data)
	  },
      Mth(){
        // console.log("222")
        this.axios.get("http://127.0.0.1:8125/index").then(res => {
          this.ths = res.data             //有数据的库
          console.log(res)
          console.log(this.ths)
        })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  ul{
    padding: 0px;
    margin: 0px;
    list-style: none;
  }

</style>
