import {useAuthContext} from "../hooks/useAuthContext";
import { useEffect } from "react";
const useAuth = () => {
  const { dispatch } = useAuthContext();
  
  
  useEffect(() => {
    const initUser = async () => {
      
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.token) {
        const expiration = user.expiration;
        if (Date.now()< expiration) {
          dispatch({ type: "LOGIN", payload: user })
          return user
         
        }
      } 

    };
    initUser();
  }, [dispatch]);
  return null
};
export default useAuth;
