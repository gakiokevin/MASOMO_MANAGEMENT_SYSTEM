import { Link } from "react-router-dom"
const Message = ()=>{
   return (
       <div className="message">
          <Link to="/">
        <ion-icon name="arrow-back-outline"></ion-icon>
      </Link>
      <div>
         <h2>No any messages yet</h2>
      </div>
       </div>
   )
}
export  default Message