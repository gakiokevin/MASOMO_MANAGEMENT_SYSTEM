import {AuthContext} from '../context/AouthContext'
import {useContext} from 'react'

export const useAuthContext = ()=>{
   const context = useContext(AuthContext)

   if(!context){
      throw Error('useAuthContext must be used within a context provider')
   }


   return context

}
