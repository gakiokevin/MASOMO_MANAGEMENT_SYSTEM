const User = require('../models/userModel')
const jwt  = require('jsonwebtoken')



const genToken = (_id)=>{
    const  expiresIn = 3 * 24 * 60 * 60
    const expirationTime = Date.now() + expiresIn*1000
    const token = jwt.sign({_id},process.env.SECRET,{expiresIn})
   return {
      token,expiration:expirationTime
   }
}

const loginUser = async (req,res)=>{
    const {email,password} = req.body
    try{
      const user = await User.login(email,password)
      const {token,expiration} =  genToken(user._id)
 
      return res.status(200).json({email,token,expiration})
 
 
 
    }catch(error){
 
       res.status(400).json({error:error.message})
    }
}



const signupUser = async (req,res)=>{
   const {email,password} = req.body

   try{
     const user = await User.signup(email,password)
     const {token,expiration} =  genToken(user._id)

     return res.status(200).json({email,token,expiration})



   }catch(error){

      res.status(400).json({error:error.message})
   }
  
   }

module.exports = {signupUser,loginUser}
