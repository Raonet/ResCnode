<template>
<div class="main">
  <div class="left">
    <left/>
  </div>
  <div class="list">
    <list/>
  </div>
</div>
</template>

<script>
import left from './mainleft.vue'
import list from './list.vue'
export default {
  components:{
    left,
    list
  }
  
}
</script>

<style lang="css">
@import '../assets/css/main.css';
</style>