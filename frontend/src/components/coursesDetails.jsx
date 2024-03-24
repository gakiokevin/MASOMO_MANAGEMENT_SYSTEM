
import { useCoursesContext } from '../hooks/useCourses'

const CourseDetails = ({course})=>{
   const {dispatch} = useCoursesContext()

const Delete = async (id)=>{

  
   const response =  await fetch('https://apis-nloi.onrender.com/courses/delete-course',{method:'DELETE',body:JSON.stringify({id:id}),headers:{
      'Content-Type':'application/json'
   }})

   const deletedResponse = await response.json()
   if(response.ok){
     dispatch({type:'DELETE_COURSE',payload:id,message:deletedResponse.message})
   }

}





return (
   <div className='course-details'>
      <div>
  <h4>{course.title.toUpperCase()}</h4>
  <p>CreatedAt</p>

      </div>
  <span onClick={()=>Delete(course._id)}><ion-icon name="trash-outline"></ion-icon></span>
   </div>
)
}
export default CourseDetails