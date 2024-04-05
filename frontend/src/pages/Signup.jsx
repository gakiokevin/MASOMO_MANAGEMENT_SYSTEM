import {useState} from 'react'
import './login.css'
import {useSignup} from '../hooks/userSignUp'

const Signup = ({setStatus})=>{
   const {signup, error, loading} =  useSignup()
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')

   const handleSubmit = async (e)=>{
      e.preventDefault()
       await signup(email,password,setStatus)
   }
return (
   <div className="wrapper">

   <form onSubmit={handleSubmit}>
      <h1>Sign up</h1>
      <div className="input-box">
         <input type="email"  placeholder="email"
         onChange={(e)=>setEmail(e.target.value)}
         value={email}/>
         <ion-icon name="mail-outline"></ion-icon>

      </div>
      <div className="input-box">
         <input type="password"  placeholder="password"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}/>
      <ion-icon name="lock-closed"></ion-icon>
      </div>
      <button type="submit" className="btun" disabled={loading}>Submit</button>
      {error && <div className="error" style={{marginTop:'10px'}}>{error}</div>}
   </form>
   </div>
)
}
 export default Signup