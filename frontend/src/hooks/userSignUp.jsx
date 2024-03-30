import {useState} from 'react'
import  {useAuthContext} from './useAuthContext'

export const useSignup =  ()=> {
const [error,setError] = useState(null)
const [loading,setIsLoading] = useState(null)
const {dispatch} = useAuthContext()


const signup  = async (email,password)=>{
   setIsLoading(true)
   setError(false)
   const response = await fetch('http://localhost:3000/user/signup',{
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
   }
}



return {signup, error, loading}
}