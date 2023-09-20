<template>
    <div class="home">
      <!--    顶部-->
      <div class="header">
        <h1>后端管理系统</h1>
        <div class="box-user">
          <span
            >账号:  测试  <br />
            用户类型:  测试
          </span>
          <br />
          <button @click="exit">退出</button>
        </div>
      </div>
      <div class="box">
        <div class="box-left">
          <!--    //左侧菜单边栏-->
          <Menu></Menu>
        </div>
        <div class="box-right">
          <!--    //右侧内容主体区域-->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Menu from "@/views/Menu.vue";
  
  export default {
    name: "home",
    components: {
      Menu,
    },
  
    data(){
      return{
        
      }
    },
  
    methods: {
      // exit() {
      //   this.$router.replace("/login");
      // },
    },
  };
  </script>
  
  <style scoped>
  .header {
    position: relative;
    height: 100px;
    width: 100%;
    border-bottom: 1px solid rgb(0, 0, 0);
    line-height: 100px;
    /* border: 1px solid black; */
  }
  
  .box-user {
    width: 300px;
    height: 100px;
    position: absolute;
    right: 0px;
    top: 0px;
    border: 1px solid black;
    line-height: 30px;
    text-align: left;
  }
  
  .box {
    display: flex;
    flex-direction: row;
    /* border: 1px solid black; */
  }
  
  .box-left {
    width: 16vw;
    height: calc(100vh - 100px);
    /* border: 1px solid black; */
  }
  
  .box-right {
    width: 84vw;
    height: calc(100vh - 100px);
    display: block;
    position: relative;
    right: 0;
    top: 0px;
    overflow-y: scroll;
    border: 1px solid black;
    background-color: white;
  }
  </style>
  