
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
//import Navbar from 'react-bootstrap/Navbar';

// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import NotificationsIcon from '@mui/icons-material/Notifications';
//import logo from '../assets/KUSOMABORA.png' 

const Header = ()=>{
 return (
  <div className="header" style={{display:'flex',justifyContent:'space-between',alignItems:'center',margin:'-16px 5px'}}>
   <div className="logo">
    <p><span style={{color:'red',fontWeight:'bold'}}>KUSOMA</span>BORA</p>
   </div>
    <div>
      <ul style={{display:'flex',padding:'10px'}}>
      <li><a href="">Courses</a></li>
      <li><a href="">Notifications</a></li>
      <li><a href="">Account</a></li>
      </ul>
      </div>

  </div>
   
      
   



 )
}
export default Header