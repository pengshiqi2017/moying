var mongoose=require('mongoose');
var url='mongodb://localhost/moying'
mongoose.connect(url,function(err){
	if(err){
		console.log("出错"+err);
	}else{
		console.log("数据库连接成功");
	}
});
//?????
module.exports=mongoose;