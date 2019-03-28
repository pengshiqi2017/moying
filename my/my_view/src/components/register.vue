<template>
	<div class="main">
		 <div class="zhong">
			<div class="top">
				<div class="top-1"><img src="../assets/img_7.png" class="img-req"/></div>
				<div class="top-2">注册</div>
			</div>
			<div class="inputbox">
				<div class="zhanghao">账号：</div>
				<input type="text" placeholder="手机号或邮箱" v-model="username"/>
			</div>
			<div class="inputbox">
				<div class="zhanghao">密码：</div>
				<input type="password" placeholder="密码" v-model="password"/>
			</div>
			<div class="inputbox">
				<div class="qqq">再次输入密码：</div>
				<input type="password" placeholder="再次输入密码" v-model="repassword"/>
			</div>
			<div class="inputbox">
				<div class="zhanghao">用户邮箱：</div>
				<input type="text" placeholder="邮箱" v-model="userMail" />
			</div>
			<div class="inputbox">
				<div class="zhanghao">用户手机：</div>
				<input type="text" placeholder="手机" v-model="userPhone" />
			</div>
			<div>
					<div class="denglv">已有账号，去<router-link to="/login" style="text-decoration: none;color: #5f81db;">登录</router-link></div>
				<button v-on:click="userRegister" class="denglu">注册</button> 
			</div>
			<!-- <div>
			 <p>账号：</p>
			 <input type="text" placeholder="请输入账号" v-model="input1"/>
			 <label>密码：</label>
			 <input type="text" placeholder="请输入密码" v-model="input2"/>
			 <button v-on:click=userLogin()>登录</button> 
			</div> -->
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				username:'',
				password:'',
				userMail:'',
				userPhone:'',
				repassword:'',
			}
		},
		methods:{
			userRegister:function(event){
				if(this.password!=this.repassword){
					alert('两次密码不正确')
				}else{
					let sendDate={
						username:this.username,
						password:this.password,
						userMail:this.userMail,
						userPhone:this.userPhone,
					}
					this.axios.post('/api/users/register',sendDate)
					.then((data)=>{
						if(data.data.message){
							alert(data.data.message);
							this.$router.push({path:'/login'})
						}else{
							alert(data.data.message);
							this.$router.go(-1)
						}
					})
				}
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
		height: 730px;
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
	.qqq{
		float: left;
		width: 300px;
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
		margin-top: 500px;
	}
	.denglv{
		color: #5f81db;
	}
</style>
