<template>
  <div class="userinfo">
      <div class="user">
        <div class="title">
          <a href="">主页</a>
        </div>
      </div>
      <div class="userinfomation">
          <img :src="userinfo.avatar_url" alt="" :title="userinfo.loginname"><br/>{{userinfo.loginname}}
          <p style="display:block;padding:0px;margin:20px 0 20px 0;font-size:18px">
              获得积分:{{userinfo.score}}
          </p>
          <br/>
          注册时间:{{userinfo.create_at}}
      </div>
      <div class="user">
            <div class="title">
               <a href="">最近创建的主题</a>
            </div>
        </div>
      <div class="topics">
          <ul>
			<li v-for="(item,idx) in userinfo.recent_topics" :key="idx">
					<router-link :to="{ name: 'post_content', params: { id: item.id,name:item.author.loginname }}" :title="item.title">
							{{item.title}}
					</router-link>
				</li>
			</ul>
      </div>
         <div class="user">
            <div class="title">
               <a href="">最近回复的主题</a>
            </div>
        </div>
      <div class="replies">
				<ul>
					<li v-for="(item,idx) in userinfo.recent_replies" :key="idx">
						<router-link :to="{ name: 'post_content', params: { id: item.id,name:item.author.loginname }}" :title="item.title">
							{{item.title}}
						</router-link>
					</li>
				</ul>
		</div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
    name:'userInfo',
    data(){
        return{
            userinfo:{}
        }
    },
    methods:{
        getUser(){
            Axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
            .then(response=>{
               this.userinfo = response.data.data;
            })
        }
    },
    mounted(){
        this.getUser()
    },
}
</script>

<style lang="css">
.user{
    width: 66%;
    padding: 10px;
    margin: 15px 1% 0px 5%;
    background-color: #f6f6f6;
    display: inline-block;
}
.user .title a{
    margin: 0 10px;
    color: #80bd01;
    font-size: 14px;
}
.userinfomation,.topics,.replies{
    width: 66%;
    padding: 10px;
    margin: 0 1% 0px 5%;
    background-color: white;
}
.userinfomation img{
    width: 40px;
    height: 40px;
}
</style>