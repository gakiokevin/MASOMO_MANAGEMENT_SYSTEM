// import user from '../public/vite.svg'
import {useEffect} from 'react'

import CourseDetails from '../components/coursesDetails'
import CourseForm from '../components/courseForm'
import { useCoursesContext } from '../hooks/useCourses'

const Main = ({active,isActive,form,showForm})=> {
const {courses,dispatch } = useCoursesContext()

useEffect(()=>{
 
const fetchCourses = async ()=>{
   const response =await fetch('https://masomo-management-system.onrender.com/courses')
   const json = await response.json()
   if(response.ok){
     dispatch({type:'SET_COURSES',payload: json})
   }
}

fetchCourses()
},[])




 function Toggle(){
  if(active === ''){
   isActive('active')
  }else{
   isActive('')
  }

 }

 return (
   <div className={`main ${active}`}>
      <div className="topbar">
         <div className="toggle" onClick={Toggle}>
         <ion-icon name="menu-outline"></ion-icon>
         </div>
         <div className="user">
            <img src='dh' alt="logo" />
         </div>
      </div>
    
      {form ?(<CourseForm showForm={showForm}/>) :(
      <div>
      <div className="cardBox">
        <div className="card">
           <div>
           {courses && <div className="numbers">{courses.length}</div>}
           <div className="cardName">courses</div>

           </div>
           <div className="iconBox">
           <ion-icon name="book-outline"></ion-icon>
           </div>
        </div>
        <div className="card">
           <div>
           <div className="numbers">10</div>
           <div className="cardName">Messages</div>

           </div>
           <div className="iconBox">
           <ion-icon name="chatbox-outline"></ion-icon>
           </div>
        </div>
        <div className="card">
           <div>
           <div className="numbers">10</div>
           <div className="cardName">courses</div>

           </div>
           <div className="iconBox">
              x
           </div>
        </div>
        <div className="card">
           <div>
           <div className="numbers">10</div>
           <div className="cardName">Messages</div>

           </div>
           <div className="iconBox">
              xxxx
           </div>
        </div>
     </div>
     <div className="details">
        <div className="recentCourses">
           <div className="cardHeader">
              <h2>Recent courses</h2>
              <a href="" className="btn">View All</a>
           </div>
           {courses && courses.map((course)=>(
         <CourseDetails key={course._id} course={course}/>
         ))}
        </div>
     </div>
     </div>)} 
     
   </div>
 )

}
export default Main

// {courses && courses.map((course)=>(
//    <p key={course._id}>{course.title}</p>
// ))}