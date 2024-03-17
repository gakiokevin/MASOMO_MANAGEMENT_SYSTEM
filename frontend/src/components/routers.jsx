import App from "../App";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import { useState } from "react";

import Course from "./aboutCourse";
import Add_course from "./addcourse";

function Router (){
  let courses = [{
   id:1,
   title:'Introduction to html',
   description:'a course that teaches students how to stucture a html page',
   course_outline:'1. introudction to the upcoming genious'
  },{
   id:2,
   title:'simulation modeling',
   description:'a course that teaches students how to create model to imitate real projects before they are intialised',
   course_outline:'1. introudction to the upcoming genious'
  },
  {
   id:3,
   title:'Tests of hypothesis',
   description:'a course that teaches students how to stucture a html page',
   course_outline:'1. introudction to the upcoming genious'
  },
  {
   id:4,
   title:'Networking',
   description:'a course that teaches students how to stucture a html page',
   course_outline:'1. introudction to the upcoming genious'
  }
  ,{
   id:5,
   title:'Complex analysis',
   description:'a course that teaches students how to stucture a html page',
   course_outline:'1. introudction to the upcoming genious'
  },{
   id:6,
   title:'partail differential',
   description:'a course that teaches students how to stucture a html page',
   course_outline:'1. introudction to the upcoming genious'
  },{
   id:7,
   title:'web programming',
   description:'a course that teaches students how to stucture a html page',
   course_outline:'1. introudction to the upcoming genious'
  },{
   id:8,
   title:'java',
   description:'a course that teaches students how to stucture a html page',
   course_outline:'1. introudction to the upcoming genious'
  }
  ]
const [path,setPath] = useState('')
const [all_courses,showCourses] = useState([{
   id:1,
   title:'Introduction to html',
   description:'a course that teaches students how to stucture a html page',
   course_outline:'1. introudction to the upcoming genious'
  },{
   id:2,
   title:'simulation modeling',
   description:'a course that teaches students how to create model to imitate real projects before they are intialised',
   course_outline:'1. introudction to the upcoming genious'
  },
  {
   id:3,
   title:'Tests of hypothesis',
   description:'a course that teaches students how to stucture a html page',
   course_outline:'1. introudction to the upcoming genious'
  },
  {
   id:4,
   title:'Networking',
   description:'a course that teaches students how to stucture a html page',
   course_outline:'1. introudction to the upcoming genious'
  }
  ,{
   id:5,
   title:'Complex analysis',
   description:'a course that teaches students how to stucture a html page',
   course_outline:'1. introudction to the upcoming genious'
  }

])

function  allCourses(){
   setPath('courses')
   console.log(path)
   showCourses(()=>courses)
}
function oneCourse(id){
   const selectedCourse = courses.filter(c=> c.id == id)
   setPath(selectedCourse.map((c)=>c.id))
   showCourses(selectedCourse)
   
}

   const router = createBrowserRouter([
      {
         path:'/',
         element:<App allCourses={allCourses} oneCourse ={oneCourse} all_courses={all_courses}/>
      },{
         path:'courses',
         element: <Course  all_courses={all_courses}/>,
      },{
         path:'new-course',
         element:<Add_course/>
      }
   ])
   return (
      <RouterProvider router={router}/>

     

   )
}




export default Router