import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";
import "./App.css";
function App() {
  const { user } = useAuthContext();
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={user ? <Dashboard/>:<Navigate to='/login'/>}/>
          <Route path="/login" element={user ? <Navigate to='/'/>:<Login />} />
          <Route path="/signup" element={ user ? <Navigate to='/'/>: <Signup/> }/>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
