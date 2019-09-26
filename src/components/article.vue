<template>
  <div class="article">
      <h1>{{article.title}}</h1>
      <ul>
				<li>• 分类:{{ postTab }}</li>
				<li>• {{ article.visit_count }}次访问</li>
				<li>• 发布于:{{ article.create_at | formatDate }}</li>
				<li>
					• 作者:
					<router-link :to="{ name:'user_info',params:{name:article.author.loginname }}">{{ article.author.loginname }}</router-link>
				</li>
			</ul>
      <div v-html="article.content" id="content"></div>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data(){
    return{
      article:{

      }
    }
  },
  methods:{
    getArticle(){
      Axios.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
      .then(response=>{
        this.article = response.data.data;
        window.console.log(response)
      })
    }
  },
  mounted() {
    this.getArticle()
  },
}
</script>

<style>
@import '../assets/content.css';
.article{
    width: 66%;
    padding: 10px;
    margin: 15px 1% 0px 5%;
    background-color: #f6f6f6;
    display: inline-block;
}
</style>