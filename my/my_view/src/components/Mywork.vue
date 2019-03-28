<template>
	<div class="main">
		<div class="ding">
		<div class="top">
			<div class="top1">
				<div class="top-1">
					<div class="top-1-no"><router-link to="/index" style="text-decoration: none;color: #747474;">推荐</router-link></div>
					<div class="top-1-no"><router-link to="/Latest" style="text-decoration: none;color: #747474;">最新</router-link></div>
					<div class="top-1-no"><router-link to="/Classification" style="text-decoration: none;color: #747474;">分类</router-link></div>
					<div class="top-1-no"><router-link to="/activity" style="text-decoration: none;color: #747474;">活动</router-link></div>
					<div class="top-1-yes">我的</div>
				</div>
				<div class="top-right"><img src="../assets/img_1.png" class="img-req"/></div>
			</div>
			<div class="top_2">
				<div class="top_2_1"><img src="../assets/img_3_1.png" class="img-req" /></div>
			</div>
			<div class="top_2">{{this.$route.query}}</div>
		</div>
		<div class="div2">
			<div class="div2_yes">作品</div>
			<div class="div2_no">关注</div>
			<div class="div2_no">收藏</div>
		</div>
		<div class="img_19"><img src="../assets/img_19.png" class="img-req" /></div>
		</div>
		
	</div>
</template>

<script>
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		font-family: '微软雅黑';
	}
	.top1{
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
	.ding{
		float: left;
		height: 1947px;
	}
	.main{
		float: left;
		width: 750px;
		height: 2100px;
	}
	.top{
		float: left;
		width: 750px;
		height: 540px;
	}
	.top_1{
		float: right;
		width: 218px;
		margin-top: 49px;
	}
	.top_1_1{
		float: right;
		width: 59px;
		height: 59px;
		margin-right: 20px;
	}
	.img-req{
		width: 100%;
		height: 100%;
	}
	.top_2{
		float: left;
		width: 750px;	
		color: #5b7dda;
		font-size: 32px;
		margin-top: 20px;
		text-align: center;
	}
	.top_2_1{
		float: left;
		width: 206px;
		height: 206px;
		margin-left: 270px;
	}
	.div2{
		float: left;
		width: 750px;
		height: 84px;
	}
	.div2_yes{
		float: left;
		width: 250px;
		height: 77px;
		border-bottom: 6px solid #000000;
		text-align: center;
	}
	.div2_no{
		float: left;
		width: 250px;
		height: 77px;
		text-align: center;
	}
	
	.img_19{
		float: left;
		width: 156px;
		height: 156px;
		margin-left: 300px;
		margin-top: 400px;
	}
</style>
