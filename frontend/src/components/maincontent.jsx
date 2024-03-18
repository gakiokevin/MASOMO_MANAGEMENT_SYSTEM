import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


import { Link } from 'react-router-dom'

const Main = ({all_courses,oneCourse,allCourses})=>{
   const five = all_courses.length
    const filteredCourses = all_courses.slice(0,3)
   return (
      <div className="main">
         <Container>
      <h2>Overview</h2>
         <div className='courses'>
            <h2>Courses</h2>
            <p>Your recent courses</p>
            <hr/>
            {filteredCourses.map((course)=>(
               <div key={course._id} className="new_course">
         
               <p>{course.title}</p>
               <button onClick={()=>oneCourse(course.id)} disabled>view</button>
              {/* <Link   onClick={()=>oneCourse(course.id)} to={course.id}>view course...</Link> */}
            <hr />
            </div>

            ))}
            {five > 4 ?(<Link className='showAll'  onClick={()=>allCourses()} to='courses'>
            <Button variant='primary'>Show all</Button>
            </Link>):''}
            
         </div>
         </Container>
      </div>

   )
}
export default Main