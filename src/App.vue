<template>
  <div id="app">
    <Header/>
    <div class="right">
      <Right/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Right from './components/mainright.vue'
export default {
  name: 'app',
  components: {
    Header,
    Right
  }
}
</script>

<style lang="css">
.right{
  float: right;
  display: inline-block;
  padding: 10px;
  margin: 15px 5% 0px 1%;
  background-color: #f6f6f6;
  width:18%;
}
@import "./assets/css/reset.css";
</style>
