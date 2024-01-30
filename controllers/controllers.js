const User = require('../models/user')
const bcrypt = require('bcrypt')


const getAllUsers =  async (req, res)=>{
   try{
    const users = await User.find()
    res.json(users)
   }
   catch(error){
    res.status(400).json({message: error.message})
   }
}


const addUser = async (req,res)=>{
    const {username, password} = req.body

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = new User({ username, password: hash })

    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}


const getUserById =  async(req,res)=>{
    const { id } = req.params
    try{
         const user = await User.findById(id)
         res.status(200).json(user)
    }catch(error){
        res.status(400).json({message:error.message})
    }
}


const updateUser =  async(req,res)=>{
    const id = req.params.id
    try{
        const user = await User.findByIdAndUpdate(id,req.body,{ new:true })

        if(!user) res.status(404).json({message:error.message})

        res.status(200).json(user)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}


const deleteUser = async(req,res)=>{
    try {
        const id = req.params.id
        const user = await User.findByIdAndDelete(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

module.exports  = {
    addUser, 
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}