
import './login.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useLogin} from '../hooks/useLogin'

const Login = ()=>{
   
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   
   const {login,error,isLoading} =  useLogin()
   
const handleSubmit = async (e)=>{
   e.preventDefault()
   await login(email,password)

}

return (
   <div className="wrapper">
   <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="input-box">
         <input type="text" name="email" id="email" placeholder="email"
         onChange={(e)=>setEmail(e.target.value)}
         value={email}/>
         <ion-icon name="mail-outline"></ion-icon>

      </div>
      <div className="input-box">
         <input type="password" name="password" id="password" placeholder="password"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}/>
      <ion-icon name="lock-closed"></ion-icon>
      </div>
      <button type="submit" className="btun" disabled={isLoading}>Login</button>
      <div className="register"><p>Don&apos;t have an account?<Link to="/signup">Register</Link></p></div>
      {error && <div className='error'>{error}</div>}
   </form>
   </div>
)
}
export default Login 