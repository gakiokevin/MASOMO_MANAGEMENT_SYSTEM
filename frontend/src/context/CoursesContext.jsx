import {createContext,useReducer} from 'react'
export const CoursesContext = createContext()
export const  coursesReducer = (state,action)=>{
   switch(action.type){
      case 'SET_COURSES':
         return {
            courses:action.payload,
            message:null
         }
         case 'CREATE_COURSE' :
            return {
               courses:[action.payload, ...state.courses],
               message:action.message
            }
         case 'DELETE_COURSE':

            return {
               ...state,
               courses:state.courses.filter(course=>course._id !==action.payload),
               message:action.message
            }
            default:
               return state
   }
   

}
export const CoursesContextProvider = ({children})=>{



const [state,dispatch] =useReducer(coursesReducer,{courses:null})

   return (
      <CoursesContext.Provider value={{...state,dispatch}}>{children}</CoursesContext.Provider>
   )

}