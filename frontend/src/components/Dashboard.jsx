import {useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import Main  from '../pages/Mainbar'
import Nav from '../pages/Navigation'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Message from '../pages/Messages'
import Notification from '../pages/Notification'

const Dashboard=()=>{
   const [active,isActive] = useState('')
  const [form,showForm] = useState(false)

  function Toggle(){
   if(active === ''){
    isActive('active')
   }else{
    isActive('')
   }
  }


   return (
      <>
      <Nav active={active} showForm={showForm}/>
      <Main active={active}>
         <Routes>
         <Route path="/" element={<Home showForm={showForm} form={form} Toggle={Toggle}/>}/>
         <Route path="/profile" element={<Profile/>}/>
         <Route path="/messages" element={<Message/>}/>
         <Route path='/notification' element={<Notification/>}/>
      </Routes>
      </Main>
      </>
   )
}

export default Dashboard