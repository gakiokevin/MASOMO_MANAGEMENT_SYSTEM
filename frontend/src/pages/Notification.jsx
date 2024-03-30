import { Link } from "react-router-dom"
const Notification = ()=>{
   return (

   <div className="user-info">
   <Link to="/">
     <ion-icon name="arrow-back-outline"></ion-icon>
   </Link>
    <h2>No any current notifications</h2>
   
 </div>
   )
}
export default Notification