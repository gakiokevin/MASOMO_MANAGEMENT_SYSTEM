import App from "../App";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import { useState,useEffect} from "react";

import Course from "./aboutCourse";
import Add_course from "./addcourse";

function Router (){
   const [coursesInDb,showCourses] = useState([
   ])
   //a function that fetches all the courses in the database
   async function getAllcourses(){
     try{
      const response = await fetch('http://localhost:3000/courses/')
      
      const availablecourses = await response.json()
      if(response.ok){
       showCourses(availablecourses)
       allCourses(availablecourses)
       
       
      }else{
         console.log(response.statusText)
      }

     }catch(err){
      console.log('the error is',err)

     }
     

   }
 
   useEffect(()=>{
      getAllcourses()
   },[])




  





//function that displays all courses from the database
function  allCourses(courses){
}
//displays only the selected course
function show_course_with_id(id){

   // const selectedCourse = courses.filter(c=> c.id == id)
   // setPath(selectedCourse.map((c)=>c.id))
   // showCourses(selectedCourse)
   
}

   const router = createBrowserRouter([
      {
         path:'/',
         element:<App allCourses={allCourses} oneCourse ={show_course_with_id} all_courses={coursesInDb}/>
      },{
         path:'courses',
         element: <Course  all_courses={coursesInDb} getAllcourses={getAllcourses}/>,
      },{
         path:'new-course',
         element:<Add_course  getAllcourses={getAllcourses}/>
      }
   ])
   return (
      <RouterProvider router={router}/>

     

   )
}




export default Router