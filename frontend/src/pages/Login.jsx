
import './login.css'

const Login = ()=>{
return (
   <div className="wrapper">

   <form action="">
      <h1>Login</h1>
      <div className="input-box">
         <input type="text" name="" id="" placeholder="username"/>
         <ion-icon name="person"></ion-icon>

      </div>
      <div className="input-box">
         <input type="password" name="" id="" placeholder="password"/>
      <ion-icon name="lock-closed"></ion-icon>
      </div>
      <button type="submit" className="btun">Login</button>
      <div className="register"><p>Don&apos;t have an account?<a href="#">Register</a></p></div>
   </form>
   </div>
)
}
export default Login 