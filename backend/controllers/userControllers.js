const {generateToken,decodeToken} = require('../utils/helpers');
const Hello = require('../models/helloModel');

module.exports.getMessage = async(req,res,next) => {
	try{
		const id = decodeToken(req.headers['authorization'])
		const helloMessage = await Hello.findOne({_id: id});
		return res.send(helloMessage.message);
	}catch(ex){
		next(ex)
	}
}

module.exports.generateToken = async(req, res, next) => {
	try{
		const helloMessage = await Hello.create({message: 'Hello World'});
		return res.json({'generatedToken':generateToken({user:"dummy",password:"12345",id:helloMessage._id})});
	}catch(ex){
		next(ex)
	}
}