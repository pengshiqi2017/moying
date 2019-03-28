<template>
	<div class="main">
		 <div class="zhong">
			<div class="top">
				<div class="top-1"><img src="../assets/img_7.png" class="img-req"/></div>
				<div class="top-2">登录</div>
			</div>
			<div class="inputbox">
				<div class="zhanghao">账号：</div>
				<input type="text" placeholder="手机号或邮箱" v-model="username"/>
			</div>
			<div class="inputbox">
				<div class="zhanghao">密码：</div>
				<input type="password" placeholder="密码" v-model="password"/>
			</div>
			<div>
				
				<div class="denglv">没有账号，去<router-link to="/register" style="text-decoration: none;color: #5f81db;">注册</router-link></div>
				<button v-on:click="userLogin" class="denglu">登录</button> 
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				username:'',
				password:'',
			}
		},
		methods:{
			userLogin:function(event){
				this.axios.post('/api/users/login',{username:this.username,password:this.password})
				.then((data)=>{
					if(data.data.message){
						alert(data.data.message);
						this.$router.push({path:'/Mywork',query:{username:this.username}})
					}else{
						let save_token={
							token:data.data.data.token,
							username:this.username,
						}
						localStorage.setItem('token',data.data.data.token);
						localStorage.setItem('username',data.data.data.user[0].username);
						localStorage.setItem('_id',data.data.data.user[0]._id);
						this.$router.go(-1)
					}
				})
			},
		}
	}
</script>

<style>
	*{
		text-align: center;
	}
	.main{
		margin: 0px;
		padding: 0px;
	}
	.zhong{
		float: left;
		width: 730px;
		height: 1092px;
	}
	.top{
		float: left;
		width: 730px;
		height: 131px;
		border-bottom: 1px solid #efefef;
		box-shadow: 5px 2px 2px #efefef;
		
	}
	.img-req{
		width: 100%;
		height: 100%;
	}
	.top-1{
		float: left;
		width: 62px;
		height: 52px;
		margin-top: 20px;
	}
	.top-2{
		float: left;
		margin-left: 255px;
		font-size: 34px;
		margin-top: 20px;
		
	}
	.inputbox{
		float: left;
		width: 730px;
		height: 205px;
	}
	.zhanghao{
		float: left;
		width: 200px;
		font-size: 30px;
		margin-top: 30px;
	}
	.inputbox input{
		float: left;
		border: 0px;
		border-bottom: 1px solid #cccccc;
		width: 600px;
		margin-left: 40px;
		margin-top: 30px;
	}
	.denglu{
		float: left;
		width: 730px;
		background: #5b7dda;
		color: #fff;
		border: 0px;
		height: 60px;
		margin-top: 300px;
	}
	.denglv{
		color: #5f81db;
	}
</style>

