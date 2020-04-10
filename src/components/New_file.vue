<template>
    <div>
      {{msg}}
      
      <p>{{asd}}</p>
	  <button @click="setMsg">按钮</button>
      <slot name="sb"></slot>
      <router-link to="/">A终端</router-link>
      <router-link to="/B">B终端</router-link>
        <div>
          <button @click="add">+</button>
          {{this.$store.state.num}}  <!-- 第一种方法1 -->
          {{num}}   <!-- 第一种方法2 -->
          {{changeNum}}   <!-- 第二种方法1 -->
          {{ss}}       <!-- 第二种方法2(对象) -->
          <button @click="del">-</button>
        </div>
    </div>
</template>

<script>
  import { mapState,mapGetters,mapMutations,mapActions  } from "vuex"
  // 引入 {mapState}组件 到 "vuex"

  export default{
    name:"Newfile",
      data () {
        return {
          msg: "页头",
		  adp: "页尾"
        }
      },
      props: ["asd"],
      methods:{
        setMsg(){
          // this.msg =!this.msg
          this.$emit("aimer", this.adp) // 指定事件名, 需要传递的数据
        },
        ...mapActions(["add","del"]),
        // ...mapMutations(["add","del"]),
        // add(){
        //   this.$store.commit("add")
        // },
        // del(){
        //   this.$store.commit("del")
        // }
      },

      computed:{
        ...mapState(["num"]),
        ...mapGetters(["changeNum"]),
        ...mapGetters({
          ss: "changeNum"   //对象
        })
      }

  }
</script>

<style>

</style>
