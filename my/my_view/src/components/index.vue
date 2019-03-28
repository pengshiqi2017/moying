<template>
	<div>
		<div class="main">
			<div class="top">
				<div class="top-1">
					<div class="top-1-yes">推荐</div>
					<div class="top-1-no"><router-link to="/Latest" style="text-decoration: none;color: #747474;">最新</router-link></div>
					<div class="top-1-no"><router-link to="/Classification" style="text-decoration: none;color: #747474;">分类</router-link></div>
					<div class="top-1-no"><router-link to="/activity" style="text-decoration: none;color: #747474;">活动</router-link></div>
					<div class="top-1-no"><router-link to="/Mywork" style="text-decoration: none;color: #747474;">我的</router-link></div>
				</div>
				<div class="top-right"><img src="../assets/img_1.png" class="img-req"/></div>
			</div>
			<div class="div1" style="margin-top: 0;">
				<div class="div1-1"><router-link to="/Details" style="text-decoration: none;color: #747474;"><img src="../assets/img_2.png" class="img-req"/></router-link></div>
				<div class="div1-2">
					<div class="div1-2-1">
						<div class="div1-2-1-1">
							<img src="../assets/img_3.png" class="img-req"/>
						</div>
						<div class="div1-2-1-2">
							<span>
								<p v-for="newsItems in newsItems">{{newsItems.articleContext}}</p>
							</span>
							<div class="div1-2-1-2-1">
								<div class="div1-2-1-2-span1">人像</div>
								<span style="color: #A5A5A5;">1年前</span>
							</div>
						</div>
						<div class="div1-2-1-2-2">
							<div class="div1-2-1-2-2-1">
								<img src="../assets/img_4.png" class="img-req"/>
								<span style="color: #cccccc;">999</span>
							</div>
							<div class="div1-2-1-2-2-2">
								<img src="../assets/img_5.png" class="img-req"/>
								<span style="color: #cccccc; margin-left: 3px;">6</span>
							</div>
							<div class="div1-2-1-2-2-2">
								<img src="../assets/img_6.png" class="img-req"/>
								<span style="color: #cccccc;">6</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="div1">
				<div class="div1-1"><img src="../assets/img_2_1.png" class="img-req"/></div>
				<div class="div1-2">
					<div class="div1-2-1">
						<div class="div1-2-1-1">
							<img src="../assets/img_3.png" class="img-req"/>
						</div>
						<div class="div1-2-1-2">
							<span>
								<p v-for="newsItems in newsItems">{{newsItems.articleContext}}</p>
							</span>
							<div class="div1-2-1-2-1">
								<div class="div1-2-1-2-span1">人像</div>
								<span style="color: #A5A5A5;">1年前</span>
							</div>
						</div>
						<div class="div1-2-1-2-2">
							<div class="div1-2-1-2-2-1">
								<img src="../assets/img_4.png" class="img-req"/>
								<span style="color: #cccccc;">999</span>
							</div>
							<div class="div1-2-1-2-2-2">
								<img src="../assets/img_5.png" class="img-req"/>
								<span style="color: #cccccc; margin-left: 3px;">6</span>
							</div>
							<div class="div1-2-1-2-2-2">
								<img src="../assets/img_6.png" class="img-req"/>
								<span style="color: #cccccc;">6</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="div1">
				<div class="div1-1"><img src="../assets/img_2_2.png" class="img-req"/></div>
				<div class="div1-2">
					<div class="div1-2-1">
						<div class="div1-2-1-1">
							<img src="../assets/img_3.png" class="img-req"/>
						</div>
						<div class="div1-2-1-2">
							<span>
								<p v-for="newsItems in newsItems">{{newsItems.articleContext}}</p>
							</span>
							<div class="div1-2-1-2-1">
								<div class="div1-2-1-2-span1">人像</div>
								<span style="color: #A5A5A5;">1年前</span>
							</div>
						</div>
						<div class="div1-2-1-2-2">
							<div class="div1-2-1-2-2-1">
								<img src="../assets/img_4.png" class="img-req"/>
								<span style="color: #cccccc;">999</span>
							</div>
							<div class="div1-2-1-2-2-2">
								<img src="../assets/img_5.png" class="img-req"/>
								<span style="color: #cccccc; margin-left: 3px;">6</span>
							</div>
							<div class="div1-2-1-2-2-2">
								<img src="../assets/img_6.png" class="img-req"/>
								<span style="color: #cccccc;">6</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="div1">
				<div class="div1-1"><img src="../assets/img_2_3.png" class="img-req"/></div>
				<div class="div1-2">
					<div class="div1-2-1">
						<div class="div1-2-1-1">
							<img src="../assets/img_3.png" class="img-req"/>
						</div>
						<div class="div1-2-1-2">
							<span>
								<p v-for="newsItems in newsItems">{{newsItems.articleContext}}</p>
							</span>
							<div class="div1-2-1-2-1">
								<div class="div1-2-1-2-span1">人像</div>
								<span style="color: #A5A5A5;">1年前</span>
							</div>
						</div>
						<div class="div1-2-1-2-2">
							<div class="div1-2-1-2-2-1">
								<img src="../assets/img_4.png" class="img-req"/>
								<span style="color: #cccccc;">999</span>
							</div>
							<div class="div1-2-1-2-2-2">
								<img src="../assets/img_5.png" class="img-req"/>
								<span style="color: #cccccc; margin-left: 3px;">6</span>
							</div>
							<div class="div1-2-1-2-2-2">
								<img src="../assets/img_6.png" class="img-req"/>
								<span style="color: #cccccc;">6</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="div1">
				<div class="div1-1"><img src="../assets/img_2_2.png" class="img-req"/></div>
				<div class="div1-2">
					<div class="div1-2-1">
						<div class="div1-2-1-1">
							<img src="../assets/img_3.png" class="img-req"/>
						</div>
						<div class="div1-2-1-2">
							<span>
								<p v-for="newsItems in newsItems">{{newsItems.articleContext}}</p>
							</span>
							<div class="div1-2-1-2-1">
								<div class="div1-2-1-2-span1">人像</div>
								<span style="color: #A5A5A5;">1年前</span>
							</div>
						</div>
						<div class="div1-2-1-2-2">
							<div class="div1-2-1-2-2-1">
								<img src="../assets/img_4.png" class="img-req"/>
								<span style="color: #cccccc;">999</span>
							</div>
							<div class="div1-2-1-2-2-2">
								<img src="../assets/img_5.png" class="img-req"/>
								<span style="color: #cccccc; margin-left: 3px;">6</span>
							</div>
							<div class="div1-2-1-2-2-2">
								<img src="../assets/img_6.png" class="img-req"/>
								<span style="color: #cccccc;">6</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="div1">
				<div class="div1-1"><img src="../assets/img_2.png" class="img-req"/></div>
				<div class="div1-2">
					<div class="div1-2-1">
						<div class="div1-2-1-1">
							<img src="../assets/img_3.png" class="img-req"/>
						</div>
						<div class="div1-2-1-2">
							<span>
								<p v-for="newsItems in newsItems">{{newsItems.articleContext}}</p>
							</span>
							<div class="div1-2-1-2-1">
								<div class="div1-2-1-2-span1">人像</div>
								<span style="color: #A5A5A5;">1年前</span>
							</div>
						</div>
						<div class="div1-2-1-2-2">
							<div class="div1-2-1-2-2-1">
								<img src="../assets/img_4.png" class="img-req"/>
								<span style="color: #cccccc;">999</span>
							</div>
							<div class="div1-2-1-2-2-2">
								<img src="../assets/img_5.png" class="img-req"/>
								<span style="color: #cccccc; margin-left: 3px;">6</span>
							</div>
							<div class="div1-2-1-2-2-2">
								<img src="../assets/img_6.png" class="img-req"/>
								<span style="color: #cccccc;">6</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="div1">
				<div class="div1-1"><img src="../assets/img_2_3.png" class="img-req"/></div>
				<div class="div1-2">
					<div class="div1-2-1">
						<div class="div1-2-1-1">
							<img src="../assets/img_3.png" class="img-req"/>
						</div>
						<div class="div1-2-1-2">
							<span>
								<p v-for="newsItems in newsItems">{{newsItems.articleContext}}</p>
							</span>
							<div class="div1-2-1-2-1">
								<div class="div1-2-1-2-span1">人像</div>
								<span style="color: #A5A5A5;">1年前</span>
							</div>
						</div>
						<div class="div1-2-1-2-2">
							<div class="div1-2-1-2-2-1">
								<img src="../assets/img_4.png" class="img-req"/>
								<span style="color: #cccccc;">999</span>
							</div>
							<div class="div1-2-1-2-2-2">
								<img src="../assets/img_5.png" class="img-req"/>
								<span style="color: #cccccc; margin-left: 3px;">6</span>
							</div>
							<div class="div1-2-1-2-2-2">
								<img src="../assets/img_6.png" class="img-req"/>
								<span style="color: #cccccc;">6</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="div1">
				<div class="div1-1"><img src="../assets/img_2_2.png" class="img-req"/></div>
				<div class="div1-2">
					<div class="div1-2-1">
						<div class="div1-2-1-1">
							<img src="../assets/img_3.png" class="img-req"/>
						</div>
						<div class="div1-2-1-2">
							<span>
								<p v-for="newsItems in newsItems">{{newsItems.articleContext}}</p>
							</span>
							<div class="div1-2-1-2-1">
								<div class="div1-2-1-2-span1">人像</div>
								<span style="color: #A5A5A5;">1年前</span>
							</div>
						</div>
						<div class="div1-2-1-2-2">
							<div class="div1-2-1-2-2-1">
								<img src="../assets/img_4.png" class="img-req"/>
								<span style="color: #cccccc;">999</span>
							</div>
							<div class="div1-2-1-2-2-2">
								<img src="../assets/img_5.png" class="img-req"/>
								<span style="color: #cccccc; margin-left: 3px;">6</span>
							</div>
							<div class="div1-2-1-2-2-2">
								<img src="../assets/img_6.png" class="img-req"/>
								<span style="color: #cccccc;">6</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="div1">
				<div class="div1-1"><img src="../assets/img_2.png" class="img-req"/></div>
				<div class="div1-2">
					<div class="div1-2-1">
						<div class="div1-2-1-1">
							<img src="../assets/img_3.png" class="img-req"/>
						</div>
						<div class="div1-2-1-2">
							<span>
								<p v-for="newsItems in newsItems">{{newsItems.articleContext}}</p>
							</span>
							<div class="div1-2-1-2-1">
								<div class="div1-2-1-2-span1">人像</div>
								<span style="color: #A5A5A5;">1年前</span>
							</div>
						</div>
						<div class="div1-2-1-2-2">
							<div class="div1-2-1-2-2-1">
								<img src="../assets/img_4.png" class="img-req"/>
								<span style="color: #cccccc;">999</span>
							</div>
							<div class="div1-2-1-2-2-2">
								<img src="../assets/img_5.png" class="img-req"/>
								<span style="color: #cccccc; margin-left: 3px;">6</span>
							</div>
							<div class="div1-2-1-2-2-2">
								<img src="../assets/img_6.png" class="img-req"/>
								<span style="color: #cccccc;">6</span>
							</div>
						</div>
					</div>
				</div>
			</div> 
			
			
			
			
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
	.main{
		margin: 0;
		padding: 0;
		width: 730px;
		height: 5443px;
		font-family: '微软雅黑';
	}
	.top{
		float: left;
		width: 730px;
		height: 100px;
		font-size: 26px;
		margin-left: 10px;
		margin-top: 20px;
	}
	.top-1{
		float: left;
		width: 570px;
		height:87px;
	}
	.top-1-yes{
		float: left;
		color: #728de8;
		width: 81px;
		height: 56px;
		border-bottom: 6px solid #728DE8;
		margin-left: 8px;
		text-align: center;
	}
	.top-1-no{
		float: left;
		color: #747474;
		width: 81px;
		height: 56px;
		margin-left: 8px;
		text-align: center;
	}
	
	.top-right{
		float: right;
		width: 37px;
		height: 37px;
		margin-right: 17px;
		
	}
	.div1{
		height: 497px;
		width: 750px;
		float: left;
		margin-top: 55px;
	}
	.div1-1{
		float: left;
		width: 690px;
		height: 351px;
		margin-left: 20px;
	}
	.div1-2{
		float: left;
		width: 750px;
		height: 125px;
	}
	.div1-2-1{
		float: left;
		width: 750px;
		height: 125px;
	}
	.div1-2-1-1{
		float: left;
		width: 125px;
		height: 125px;
		margin-top: 20px;
		margin-left: 20px;
	}
	.div1-2-1-2{
		float: left;
		margin-top: 6px;
		margin-left: 22px;
		width: 351px;
	}
	.div1-2-1-2 span{
		font-size: 26px;
	}
	.div1-2-1-2-1{
		float: left;
		margin-left: 10px;
	}
	.div1-2-1-2-span1{
		float: left;
		width: 80px;
		color: #5e7ee3;
		padding-left: 10px;
		border-radius:20px 20px;
		border: 2px solid #5E7EE3;
		margin-right: 10px;
	}
	.div1-2-1-2-2{
		float: left;
		width: 228px;
	}
	.div1-2-1-2-2-1{
		float: left;
		width: 35px;
		height: 27px;
		margin-top: 47px;
		margin-left: 16px;
	}
	.div1-2-1-2-2-1 span{
		font-size: 16px;
	}
	.div1-2-1-2-2-2{
		float: left;
		width: 35px;
		height: 27px;
		margin-top: 47px;
		margin-left: 20px;
	}
	.div1-2-1-2-2-2 span{
		font-size: 16px;
	}
</style>
