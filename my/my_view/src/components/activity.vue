<template>
	<div class="main">
		<div class="top">
			<div class="top-1">
				<div class="top-1-no"><router-link to="/index" style="text-decoration: none;color: #747474;">推荐</router-link></div>
				<div class="top-1-no"><router-link to="/Latest" style="text-decoration: none;color: #747474;">最新</router-link></div>
				<div class="top-1-no"><router-link to="/Classification" style="text-decoration: none;color: #747474;">分类</router-link></div>
				<div class="top-1-yes">活动</div>
				<div class="top-1-no"><router-link to="/Mywork" style="text-decoration: none;color: #747474;">我的</router-link></div>
			</div>
			<div class="top-right"><img src="../assets/img_1.png" class="img-req"/></div>
		</div>
		<router-link to="/Photo" style="text-decoration: none;color: #747474;"><div class="div1">
			<div class="div1_1"><img src="../assets/img_20.png" class="img-req" /></div>
		</div></router-link>
		<div class="div1">
			<div class="div1_1"><img src="../assets/img_20_1.png" class="img-req" /></div>
		</div>
		<div class="div1">
			<div class="div1_1"><img src="../assets/img_20_2.png" class="img-req" /></div>
		</div>
		<div class="div1">
			<div class="div1_1"><img src="../assets/img_20_3.png" class="img-req" /></div>
		</div>
		<div class="div1">
			<div class="div1_1"><img src="../assets/img_20_4.png" class="img-req" /></div>
		</div>
		<div class="div1">
			<div class="div1_1"><img src="../assets/img_20_5.png" class="img-req" /></div>
		</div>
		
	</div>
</template>

<script>
</script>

<style>
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
	.mian{
		float: left;
		height: 1947px;
		width: 750px;
	}
	.img-req{
		width: 100%;
		height: 100%;
	}
	.div1{
		float: left;
		width: 710px;
		height: 283px;
		margin-top: 20px;
	}
	.div1_1{
		float: left;
		width: 710px;
		height: 283px;
	}
</style>
