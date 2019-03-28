var mongoose=require('../common/db');
//用户数据集
var user=new mongoose.Schema({
	username: String,
	password: String,
	userMail: String,
	userPhone: String,
	
})
//用户的查找方法
user.statics.findAll=function(callBack){
	this.find({},callBack);
};
//使用用户名查找的方式
user.statics.findByUsername=function(name,callBack){
	this.find({username:name},callBack);
};
//登录匹配是否有相同的用户名及密码并且没有封停
user.statics.findUserLogin=function(name,password,callBack){
	this.find({username:name,password:password},callBack);
};

var userModel=mongoose.model('user',user);
module.exports=userModel;