import CourseDetails from '../components/coursesDetails'
import CourseForm from '../components/courseForm'
import {useEffect} from 'react'
import {useAuthContext} from '../hooks/useAuthContext'
import { useCoursesContext } from '../hooks/useCourses'
import {Link} from 'react-router-dom'

const Home = ({form,showForm,Toggle})=>{
   const {courses,dispatch } = useCoursesContext()


   const { user } = useAuthContext()

   useEffect(()=>{
    
   const fetchCourses = async ()=>{
      const response = await fetch('http://localhost:3000/courses/',{
         headers:{
            'Authorization':`Bearer ${user.token}`
         }
      })
      const json = await response.json()
      if(response.ok){
        dispatch({type:'SET_COURSES',payload: json})
      }
   }
   if(user){
   
      fetchCourses()
   }
   },[dispatch,user])

   return (

<>
{form ?(<CourseForm showForm={showForm}/>) :(
      <div>
          <div className="topbar">
         <div className="toggle" onClick={Toggle}>
         <ion-icon name="menu-outline"></ion-icon>
         </div>
         <Link to="/profile">
         <div className="user">
         <ion-icon name="person-outline"></ion-icon>
         </div>
         </Link>
         
      </div>
      <div className="cardBox">
         <Link>
        <div className="card">
         
           <div>
           {courses && <div className="numbers">{courses.length}</div>}
           <div className="cardName">courses</div>

           </div>
           <div className="iconBox">
           <ion-icon name="book-outline"></ion-icon>
           </div>
        </div>
         </Link>
         <Link to='/messages'>
        <div className="card">
           <div>
           <div className="numbers">0</div>
           <div className="cardName">Messages</div>

           </div>
           <div className="iconBox">
           <ion-icon name="chatbox-outline"></ion-icon>
           </div>
        </div>
         </Link>
         <Link to='/notification'> 
        <div className="card">
           <div>
           <div className="numbers">0</div>
           <div className="cardName">Notifications</div>

           </div>
           <div className="iconBox">
           <ion-icon name="notifications-outline"></ion-icon>
           </div>
        </div>
         </Link>
        <div className="card">
           <div>
           <div className="numbers">45</div>
           <div className="cardName">Hours</div>
           </div>
           <div className="iconBox">
           
           <ion-icon name="chatbox-outline"></ion-icon>
           </div>
        </div>
     </div>
          <div className="details">
            {courses.length > 0 ?(
               <div className="recentCourses">
               <div className="cardHeader">
                  <h2>Recent courses</h2>
                  <a href="" className="btn">View All</a>
               </div>
               {courses && courses.map((course)=>(
             <CourseDetails key={course._id} course={course}/>
             ))}
            </div>
            ):(<div className='recentCourses'><div className='emptyCourse'><h3>No current course</h3></div></div>)}
          
       </div>


    
     </div>)} 
</>



      
   )
}
export default Home