<template>
	<div class="main">
		<div class="top">
			<div class="top-1">
				<div class="top-1-no"><router-link to="/index" style="text-decoration: none;color: #747474;">推荐</router-link></div>
				<div class="top-1-no"><router-link to="/Latest" style="text-decoration: none;color: #747474;">最新</router-link></div>
				<div class="top-1-yes"><router-link to="/Classification" style="text-decoration: none;color: #747474;">分类</router-link></div>
				<div class="top-1-no"><router-link to="/activity" style="text-decoration: none;color: #747474;">活动</router-link></div>
				<div class="top-1-no"><router-link to="/Mywork" style="text-decoration: none;color: #747474;">我的</router-link></div>
			</div>
			<div class="top-right"><img src="../assets/img_1.png" class="img-req"/></div>
		</div>
		<div class="div1">
			<div class="div1-1">人像 &gt;</div>
			<div class="div1-2">
				<router-link to="/Details" style="text-decoration: none;color: #747474;"><img src="../assets/img_8.png" class="img-req" /></router-link>
				<p>时间的沙漏沉淀着无法想象的梦</p>
			</div>
			<div class="div1-2">
				<img src="../assets/img_8_1.png" class="img-req" />
				<p>萤火虫动漫展览</p>
			</div>
		</div>
		<div class="div1">
			<div class="div1-1">风景 &gt;</div>
			<div class="div1-2">
				<img src="../assets/img_8_2.png" class="img-req" />
				<p>时间的沙漏沉淀着无法想象的梦</p>
			</div>
			<div class="div1-2">
				<img src="../assets/img_8_3.png" class="img-req" />
				<p>萤火虫动漫展览</p>
			</div>
		</div>
		<div class="div1">
			<div class="div1-1">星空 &gt;</div>
			<div class="div1-2">
				<img src="../assets/img_8_4.png" class="img-req" />
				<p>时间的沙漏沉淀着无法想象的梦</p>
			</div>
			<div class="div1-2">
				<img src="../assets/img_8_5.png" class="img-req" />
				<p>萤火虫动漫展览</p>
			</div>
		</div>
		<div class="div1">
			<div class="div1-1">微距 &gt;</div>
			<div class="div1-2">
				<img src="../assets/img_8_6.png" class="img-req" />
				<p>时间的沙漏沉淀着无法想象的梦</p>
			</div>
			<div class="div1-2">
				<img src="../assets/img_8_7.png" class="img-req" />
				<p>萤火虫动漫展览</p>
			</div>
		</div>
		<div class="div1">
			<div class="div1-1">纪实 &gt;</div>
			<div class="div1-2">
				<img src="../assets/img_8_8.png" class="img-req" />
				<p>时间的沙漏沉淀着无法想象的梦</p>
			</div>
			<div class="div1-2">
				<img src="../assets/img_8_9.png" class="img-req" />
				<p>萤火虫动漫展览</p>
			</div>
		</div>
		<div class="div1">
			<div class="div1-1">生态 &gt;</div>
			<div class="div1-2">
				<img src="../assets/img_8_10.png" class="img-req" />
				<p>时间的沙漏沉淀着无法想象的梦</p>
			</div>
			<div class="div1-2">
				<img src="../assets/img_8_11.png" class="img-req" />
				<p>萤火虫动漫展览</p>
			</div>
		</div>
		<div class="div1">
			<div class="div1-1">动物 &gt;</div>
			<div class="div1-2">
				<img src="../assets/img_8_12.png" class="img-req" />
				<p>时间的沙漏沉淀着无法想象的梦</p>
			</div>
			<div class="div1-2">
				<img src="../assets/img_8_13.png" class="img-req" />
				<p>萤火虫动漫展览</p>
			</div>
		</div>
		<div class="div1">
			<div class="div1-1">艺术 &gt;</div>
			<div class="div1-2">
				<img src="../assets/img_8_14.png" class="img-req" />
				<p>时间的沙漏沉淀着无法想象的梦</p>
			</div>
			<div class="div1-2">
				<img src="../assets/img_8_15.png" class="img-req" />
				<p>萤火虫动漫展览</p>
			</div>
		</div>
		<div class="div1">
			<div class="div1-1">质询 &gt;</div>
			<div class="div1-2">
				<img src="../assets/img_8_2.png" class="img-req" />
				<p>时间的沙漏沉淀着无法想象的梦</p>
			</div>
			<div class="div1-2">
				<img src="../assets/img_8_15.png" class="img-req" />
				<p>萤火虫动漫展览</p>
			</div>
		</div>
		
	</div>
</template>

<script>
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
	.mian{
		float: left;
		height: 1947px;
		width: 750px;
	}
	.div1{
		float: left;
		width: 750px;
	}
	.div1-1{
		float: left;
		width: 730px;
		color: #5b7dda;
	}
	.div1-2{
		float: left;
		width: 275px;
		margin-top: 47px;
		margin-right: 85px;
		margin-left: 15px;
	}
	.div1-2 p{
		font-size: 12px;
		color: #bababa;
	}
</style>
