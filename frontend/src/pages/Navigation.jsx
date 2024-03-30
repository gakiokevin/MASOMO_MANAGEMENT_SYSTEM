
import { useLogout } from '../hooks/useLogOut'
import {Link} from 'react-router-dom'
const Nav = ({active,showForm}) => {


  const {logout} = useLogout()

  const handleClick = ()=>{
    logout()
  }
  return (
    <div className={`navigation ${active}`}>

    <ul>
      <li>
        <Link to="">
          <span className="icon">
          <ion-icon name="school-outline"></ion-icon>
         
          </span>
          <span className="title">MasomoBora</span>
        </Link>
      </li>
      <li>
        <Link to=''>
          <span className="icon">
          <ion-icon name="home-outline"></ion-icon>
          </span>
          <span className="title">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to=''>
          <span className="icon">
          <ion-icon name="book-outline"></ion-icon>
          </span>
          <span className="title">Courses</span>
        </Link>
      </li>
      <li>
        <Link to="" onClick={()=>showForm(true)}>
          <span className="icon">
            <ion-icon name="add"></ion-icon>
            </span>
          <span className="title">New course</span>
        </Link>
      </li>
      <li>
        <Link to="/messages">
          <span className="icon">
            <ion-icon name="chatbox-outline"></ion-icon>
            </span>
          <span className="title">Messages</span>
        </Link>
      </li>
      <li>
        <Link to="/login" onClick={handleClick}>
          <span className="icon">
          <ion-icon name="log-out-outline"></ion-icon>
          </span>
          <span className="title">Logout</span>
        </Link>
      </li>
    </ul>
    </div>
  );
};
export default Nav;
