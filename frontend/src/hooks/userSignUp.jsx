import {useState} from 'react'
import  {useAuthContext} from './useAuthContext'
export const useSignup =  ()=> {
const [error,setError] = useState(null)
const [loading,setIsLoading] = useState(null)
const {dispatch} = useAuthContext()

const signup  = async (email,password,setStatus)=>{
   setIsLoading(true)
   setError(false)
   const response = await fetch('https://masomo-management-system.onrender.com/user/signup',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({email,password})
   })
   const json = await response.json()
   if(!response.ok){
      setIsLoading(false)
      setError(json.error)
   }
   if(response.ok){
      localStorage.setItem('user',JSON.stringify(json))
      dispatch({type: "LOGIN",payload:json})
      setIsLoading(false)
      setStatus(true)
   }
}



return {signup, error, loading}
}