const User = require('../models/userModel')
const jwt  = require('jsonwebtoken')



const genToken = (_id)=>{

   return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}

const loginUser = async (req,res)=>{
    const {email,password} = req.body
    try{
      const user = await User.login(email,password)
      const token =  genToken(user._id)
 
      return res.status(200).json({email,token})
 
 
 
    }catch(error){
 
       res.status(400).json({error:error.message})
    }
}



const signupUser = async (req,res)=>{
   const {email,password} = req.body

   try{
     const user = await User.signup(email,password)
     const token =  genToken(user._id)

     return res.status(200).json({email,token})



   }catch(error){

      res.status(400).json({error:error.message})
   }
  
   }

module.exports = {signupUser,loginUser}
