const url=''

const mongoose = require('mongoose');
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});


let users=new mongoose.model("users",new mongoose.Schema({
	name:String,
	email:String,
	phone:String,
	password:String
}))
let products=new mongoose.model("products",new mongoose.Schema({
	title:String,
	description:String,
	price:Number,
	tags:String,
	colors:String,
	size:String
}))


var ob={
	users,
	products
}


module.exports=ob