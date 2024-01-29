const User = require("../models/model")

//register
exports.register = async (req,res,next)=>{
    const {username, password} = req.body
    if(password.length < 6){
        res.status(400).json({message: "Password less than 6 characters"})
    }
    try{
        await User.create({
            username,
            password
        }).then(user =>{
            res.status(200).json({message: "User created successfully",user})
        })
    }catch(err){
        res.status(401).json({message:"Failed to create user."})
    }
}

//get all users
exports.users = async(req,res,next)=>{
    try{
        const users = await User.find({})
        .then( users =>{
            res.status(200).json(users)
        })
    }
    catch(err){
        res.status(401).json({message:"failed to find all users"})
    }
}

//login
exports.login = async (req,res,next)=>{
    const {username,password} = req.body

    try{
       const user = await User.findOne({username,password})
       if(!user) res.status(401).json({message:"login failed",error:"user not found"})
       else res.status(200).json({message:"login successfull",user})
    }
    catch(err){
        res.status(401).json({message:"login failure"})
    }
}

