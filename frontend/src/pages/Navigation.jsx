
import {Link} from 'react-router-dom'


const Nav = ({active,showForm}) => {
  return (
    <div className={`navigation ${active}`}>

    <ul>
      <li>
        <a href="">
          <span className="icon">
          <ion-icon name="school-outline"></ion-icon>
         
          </span>
          <span className="title">MasomoBora</span>
        </a>
      </li>
      <li>
        <a href="">
          <span className="icon">
          <ion-icon name="home-outline"></ion-icon>
          </span>
          <span className="title">Dashboard</span>
        </a>
      </li>
      <li>
        <a href="">
          <span className="icon">
          <ion-icon name="book-outline"></ion-icon>
          </span>
          <span className="title">Courses</span>
        </a>
      </li>
      <li>
        <Link to="/" onClick={()=>showForm(true)}>
          <span className="icon">
            <ion-icon name="add"></ion-icon>
            </span>
          <span className="title">New course</span>
        </Link>
      </li>
      <li>
        <a href="">
          <span className="icon">
            <ion-icon name="chatbox-outline"></ion-icon>
            </span>
          <span className="title">Messages</span>
        </a>
      </li>
      <li>
        <a href="">
          <span className="icon">
          <ion-icon name="log-out-outline"></ion-icon>
          </span>
          <span className="title">Logout</span>
        </a>
      </li>
    </ul>
    </div>
  );
};
export default Nav;
