const User =  require('../models/userModel')

const jwt  = require('jsonwebtoken')
const requireAuth =  async (req,res,next)=>{
   const {authorization} = req.headers

   if(!authorization){
      return res.status(401).json({error:'Authorization required'})
   }
   const token =  authorization.split(' ')[1]
   try{
      const {_id} = jwt.verify(token,process.env.SECRET)
      req.user = await User.findOne({ _id}).select('_id')
      next()

   }catch(error){
      if (error.name === 'TokenExpiredError') {
         return res.status(401).json({ error: 'Token has expired' });
      }

      res.status(401).json({error:'Request is not authorized'})
   }
}
module.exports = requireAuth