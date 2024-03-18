const express = require('express')
const mongoose = require("mongoose")
const router = express.Router()
const Courses =  require('../models/Course')




//getting all courses in the database
router.get('/',async (req,res)=>{
     try {
        const allCourses = await Courses.find({},'title _id outline description',)
        res.json(allCourses)
     }catch(error){
      console.error('Error finding:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
     }
})

router.post('/new-course',async (req,res)=>{
  const {title,outline,description} = req.body

  
  try {
     const newCourse = new Courses({
       title,outline,description
     })
    const course = await newCourse.save()

    return res.status(201).json({message:'Course successfully created.View it on the allcourses section'})
   


  }catch(error){
   console.error('Error creating course:', error);
   return res.status(500).json({ error: 'Internal Server Error' });
  }
   


   
})
router.put('/update-course',async (req,res)=>{
    let id = req.body.id
    let course_to_update = req.body
    try{

      if (!mongoose.Types.ObjectId.isValid(id)) {
         return res.status(400).json({ error: 'Invalid course ID' });
       }

      const updatedcourse = await Courses.findByIdAndUpdate(id,course_to_update,{new:true})

      if(!updatedcourse){
         return res.status(400).json('Course do not exist')
      }else {

        return res.status(200).json({message:'course successful updated'})
      }

    }catch(error){ 
      console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });

    }
   
})

router.delete('/delete-course',async (req,res)=>{
   let id = req.body.id
   try { 

      if (!mongoose.Types.ObjectId.isValid(id)) {
         return res.status(400).json({ error: 'Invalid course ID' });
       }

     const deletedCourse =  await Courses.findByIdAndDelete(id)
     if(deletedCourse){
        return res.status(200).json({message:'course succesfully deleted'})
      }
    else {
         return res.status(404).json({message:'Course not found'})
    }

   }catch(err){
      console.error('course not deleted',err)
      return res.status(500).json({error:'Internal server error'})
   }
})


module.exports = router