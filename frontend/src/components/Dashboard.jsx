
import {Outlet} from 'react-router-dom'
import Main  from '../pages/Mainbar'
import Nav from '../pages/Navigation'


const Dashboard=({active,showForm,setStatus})=>{
  
   return (
      <>
      <Nav active={active} showForm={showForm} setStatus={setStatus}/>
      <Main active={active}>
         <Outlet/>
      </Main>
      </>
   )
}

export default Dashboard