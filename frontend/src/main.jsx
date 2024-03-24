import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {CoursesContextProvider} from './context/CoursesContext.jsx'


const router = createBrowserRouter([{
  path:'/',
  element:<App/>
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CoursesContextProvider>
    <RouterProvider router={router}/>
    </CoursesContextProvider>
  </React.StrictMode>,
)
