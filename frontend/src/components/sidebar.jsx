import { Link } from "react-router-dom"

const Sidebar = ({allCourses})=>{
 
   return (


   <div className="sidebar">
       <h3>
         Dashboard
       </h3>
       <ul>
         <li><Link onClick={()=>allCourses()}  to='courses'>All courses</Link></li>
         <li><Link to='new-course'>New course </Link></li>
         <li><Link to="messages">Messages</Link></li>
         <li><a href="">Log out</a></li>
       </ul>


   </div>
   
    
   )
}
export default Sidebar