
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./Auth";
import { useSelector } from "react-redux";


export const RequireAuth = ({ children }) => {
  const state=useSelector(state=>state)
  const auth = useAuth();
  // if (!auth.user) {
  //   return <Navigate to="/login" />;
  // }
  return(<>
  {state.token!==""?<Outlet/>:<Navigate to="/login"/>}
  </>)
 
};
export const RequireLogin = ({ children }) => {
  const state=useSelector(state=>state)
  const auth = useAuth();
  // if (!auth.user) {
  //   return <Navigate to="/login" />;
  // }
  return(<>
  {state.token===""?<Outlet/>:<Navigate to="/home"/>}
  </>)
 
};



