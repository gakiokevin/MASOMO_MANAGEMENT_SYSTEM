const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
  title:{type:String,required:true},
  outline:{type:String,required:true},
  description:{type:String,required:true},
  user_id:{type:String, required:true}
  
},{versionKey:false,timestamps: true})


const Course = mongoose.model('course',courseSchema)


module.exports = Course