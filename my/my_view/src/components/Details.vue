<template>
	<div class="main">
		<div class="top">
			<div class="logo"><img src="../assets/img_3_2.png" class="img-req" /></div>
			<span class="jingxuan">Lofet精选</span>
		</div>
		<div class="datu">
			<img src="../assets/img_8_16.png" class="img-req" />
		</div>
		<div class="detalis">
			<p v-for="newsItems in newsItems">{{newsItems.articleTime}}</p>
			<router-link to="/Photo" style="text-decoration: none;color: #747474;"><div class="siyue"><img src="../assets/img_21.png" class="img-req" /></div></router-link>
			<div class="detalis">
				<div class="div1-2-1-2-span1">合作</div><div class="div11">11月前</div>
				<div class="img_4"><img src="../assets/img_4.png" class="img-req" /></div>
				<div class="div11">16</div>
				<div class="img_4"><img src="../assets/img_17.png" class="img-req" /></div>
				<div class="div11">16</div>
			</div>
			<input type="text" placeholder="输入评论" class="pingluen" />
			<input type="button" value="提交" class="button" />
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				 newsItems:[],
			}
		},
		created(){
			this.axios.get('/api/news').then((data) => {
			  this.newsItems = data.data.data;
			  console.log(data.data)
			})
		}
	}
</script>

<style>
	.img-req{
		width: 100%;
		height: 100%;
	}
	*{
		margin: 0;
		padding: 0;
		font-family: '微软雅黑';
	}
	.main{
		float: left;
		width: 750px;
		height: 2583px;
	}
	.top{
		float: left;
		width: 750px;
		height: 117px;
	}
	.logo{
		float: left;
		width: 67px;
		height: 67px;
		margin-left: 67px;
		margin-top: 20px;
	}
	.jingxuan{
		float: left;
		color: #c3c3c3;
		margin-top: 31px;
		margin-left: 18px;
	}
	.datu{
		float: left;
		width: 750px;
	}
	.detalis{
		float: left;
		width: 750px;
		margin-top: 67px;
	}
	.detalis p{
		float: left;
		width: 667px;
		font-size: 26px;
		margin-left: 60px;
	}
	.siyue{
		float: left;
		width: 306px;
		height: 92px;
		margin-top: 45px;
		margin-left: 13px;
	}
	.div1-2-1-2-span1{
		float: left;
		width: 75px;
		color: #5e7ee3;
		font-size: 26px;
		border-radius:20px 20px;
		border: 2px solid #5E7EE3;
		margin-left: 15px;
		margin-right: 15px;
		text-align: center;
		
	}
	.img_4{
		float: left;
		width: 31px;
		height: 25px;
		margin-left: 15px;
	}
	.div11{
		float: left;
	}
	.pingluen{
		float: left;
		border-radius:5px ;
		border: 1px solid #A5A5A5;
		margin-left: 10px;
		margin-top: 5px;
	}
	.button{
		float: left;
		width: 80px;
		height: 40px;
		background: #0074D9;
		border: 0px;
		color: #fff;
		border-radius:5px ;
		margin-left: 10px;
		margin-top: 5px;
	}
</style>
