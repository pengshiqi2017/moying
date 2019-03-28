var express = require('express');
var crypto = require('crypto');
var router = express.Router();
var user=require('../models/user');
const init_token='TKL02o';


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//用户登录接口
router.post('/login',function(req,res,next){
	//验证完整性,这里使用简单的if方式,可以使用正则表达式对输入的格式进行验证
	console.log("开始访问---------------------------------");
	 if(!req.body.username){
			res.json({status:1,message:"用户名为空"})
		}
	 if(!req.body.password){
			res.json({status:1,message:"密码为空"})
		}
	
	user.findUserLogin(req.body.username,req.body.password,function(err,userSave){
		if(userSave.length!=0){
			//通过MD5查看密码
			var token_after=getMD5Password(userSave[0]._id)
			res.json({status:0,data:{token:token_after,user:userSave},message:"用户登录成功"})
		}else{
			res.json({status:1,message:"用户名或者密码错误"})
		}
		
	})
});
//用户注册接口
router.post('/register',function(req,res,next){
	//验证完整性,这里使用简单的if方式,可以使用正则表达式对输入的格式进行验证
	if(!req.body.username){
		res.json({status:1,message:"用户名为空"})
	}
	if(!req.body.password){
		res.json({status:1,message:"密码为空"})
	}
	if(!req.body.userMail){
		res.json({status:1,message:"用户手机为空"})
	}
	user.findByUsername(req.body.username,function(err,userSave){
		if(userSave.length!=0){
			//返回错误信息
			res.json({status:1,message:"用户已注册"})
		}else{
			var registerUser=new user({
				username:req.body.username,
				password:req.body.password,
				userMail:req.body.userMail,
				userPhone:req.body.userPhone
			})
			registerUser.save(function(){
				res.json({status:0,message:"注册成功"})
			})
		}
	})
});
//用户提交评论
router.post('/postComment',function(req,res,next){
	//验证完整性,这里使用简单的if方式,可以使用正则表达式对输入的格式进行验证
	if(req.body.username){
		var username="匿名用户"
	}
	if(!req.body.movie_id){
		res.json({status:1,message:"电影id为空"})
	}
	if(!req.body.context){
		res.json({status:1,message:"评论内容为空"})
	}
	//根据数据集建立一个新的数据内容
	var saveComment=new comment({
		movie_id:req.body.movie_id,
		username:req.body.username ? req.body.username : username,
		context:req.body.context,
		check:0
	})
	//保存合适的数据集
	saveComment.save(function(err){
		if(err){
			res.json({status:1,message:err})
		}else{
			res.json({status:0,message:'评论成功'})
		}
	})
});

//用户找回密码
router.post('/findPassword',function(req,res,next){
	if(req.body.repassword){
		if(req.body.token){
			if(!req.body.user_id){
				res.json({status:1,message:"用户登录错误"})
			}
			if(!req.body.password){
				res.json({status:1,message:"用户老密码错误"})
			}
			if(req.body.token == getMD5Password(req.body.user_id)){
				user.findOne({_id:req.body.user_id,password:req.body.password},function(err,checkUser){
				if(checkUser){
					user.update({_id:req.body.user_id,password:req.body.repassword},function(err,userUpdate){
						if(err){
							res.json({status:1,message:"更改错误",data:err})
						}
						res.json({status:0,message:'更改成功',data:userUpdate})
					})
				}else{
					res.json({status:1,message:"用户老密码错误"})
				}
			})
			}else{
				res.json({status:1,message:"用户登录错误"})
			}
		}else{
			user.findUserPassword(req.body.username,req.body.userMail,req.body.userPhone,function(err,userFound){
				if(userFound.length!=0){
					user.update({_id:userFound[0]._id},{password:req.body.repassword},function(err,userUpdate){
						if(err){
							res.json({status:1,message:"更改错误",data:err})
						}
						res.json({status:0,message:'更改成功',data:userUpdate})
					})
				}else{
					res.json({status:1,message:"信息错误"})
				}
			})
		}
	}else{
		if(!req.body.username){
			res.json({status:1,message:"用户名称为空"})
		}
		if(!req.body.userMail){
			res.json({status:1,message:"用户邮箱为空"})
		}
		if(!req.body.userPhone){
			res.json({status:1,message:"用户手机为空"})
		}
		user.findUserPassword(req.body.username,req.body.userMail,req.body.userPhone,function(err,userFound){
			if(userFound.length!=0){
				res.json({status:0,message:"验证成功,请修改密码",data:{username:req.body.username,userMail:req.body.userMail,userPhone:req.body.userPhone}})
			}else{
				res.json({status:1,message:"信息错误"})
			}
		})
	}
});



//获取MD5值
function getMD5Password(id){
	var md5=crypto.createHash('md5');
	var token_before=id+init_token
	//res.json(userSave[0].id)
	return md5.update(token_before).digest('hex')
}
module.exports = router;

