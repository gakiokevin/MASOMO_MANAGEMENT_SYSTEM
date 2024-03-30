const mongoose =  require('mongoose')
const bcrypt =  require('bcrypt')
const validator = require('validator')
const userSchema = new mongoose.Schema({
   email:{
      type:String,
      required:true,
      unique:true
   },
   password:{
      type:String,
      required:true,
      unique:true
   }
})

userSchema.statics.signup = async function (email,password){
const exists =  await this.findOne({email})

if(!email || !password){
   throw Error('Please fill in all the fields')
}

if(!validator.isEmail(email)){
   throw Error('invalid email')
}

if (exists){
   throw Error('email already in use!')
}

const salt = await bcrypt.genSalt(10)
const hash = await bcrypt.hash(password,salt)

const user = await this.create({email,password:hash})
return user

}



//static login

userSchema.statics.login = async function(email,password){

   if(!email || !password){
      throw Error('Please fill in all the fields')
   }

   const user = await this.findOne({email})

   if(!user){
       throw Error('No such email')
   }
  const match = await bcrypt.compare(password,user.password)
  if(!match){
   throw Error('Incorrect password')
  }
  return user
}

module.exports = mongoose.model('User',userSchema)