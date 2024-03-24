
// import Home from './pages/home'
// import Nav from './components/navbar'
import Nav from './pages/Navigation'
import Main  from './pages/Mainbar'
import { useState } from 'react'
import './App.css'
function App() {
 
  const [active,isActive] = useState('')
  const [form,showForm] = useState(false)
  return (

    <div className='container'>
    <Nav active={active} showForm={showForm}/>
     <Main active={active} isActive={isActive} form={form} showForm={showForm}/>
    </div>
   
  )
}

export default App



// <Nav active={active}/>
//       <Main active={active} isActive={isActive}/>