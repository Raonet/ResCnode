<template>
  <span>
    <div class="list" v-for="(index,idx) in lists" :key="idx">
      <router-link :to="{ name: 'user_info', params: { name: index.author.loginname }}" :title="index.author_id">
						<img :src="index.author.avatar_url" :title="index.author.loginname"/>
			</router-link>
        <p>{{index.reply_count}}/</p>
        <p class="p2">{{index.visit_count}}</p>
      <router-link :to="{ name:'postcontent',params:{id:index.id}}" :title="index.title">
        {{index.title}}
      </router-link>
    </div>
  </span>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      lists:{
      }
    }
  },
  methods: {
    getList(){
      axios.get('https://cnodejs.org/api/v1/topics',{
      })
      .then((response)=>{
        window.console.log(response.data.data);
        this.lists = response.data.data;
      })
      .catch(function (error) {
        window.console.log(error);
      })
    }
  },
    beforeMount() {
    this.getList();
  },
}

</script>

<style lang="css">
.list img{
  width: 30px;
  height: 30px;
}
.list .p2{
  font-size:10px;
  color:#9e9e9e;
  padding: 0;
}
p{
  display:inline-block;
  font-size:14px;
  color:#6f6f6f;
  padding: 0 0 0 2%;
}
.list h1{
  display:inline-block;
  text-align: center;
}
</style>