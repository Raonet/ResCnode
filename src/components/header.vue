<template>
<div class="navbar">
    <a href=""><img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="" ></a>
    <input type="text" class="search" @mouseenter="mouseenter" v-bind:style="{'background-color':textcolor}" @mouseleave="mouseleave">
    <div class="choose">
        <router-link to="/">主页</router-link>
        <!-- <router-link >未读消息</router-link>
        <router-link >新手入门</router-link>
        <router-link >API</router-link>
        <router-link >关于</router-link>
        <router-link >设置</router-link>
        <router-link >退出</router-link> -->
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            textcolor:'#888'
        }
    },
    methods: {
      mouseenter(){
          this.textcolor = '#fff';
      },
      mouseleave(){
          this.textcolor = '#888';
      }  
    },
}
</script>

<style lang="css">
@import "../assets/css/header.css";
</style>