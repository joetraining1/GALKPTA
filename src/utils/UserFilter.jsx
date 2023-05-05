import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const UserFilter = ({ access }) => {
  const { user, token } = useAuth();
  console.log(user);

  if (user !== undefined && access && token) {
    const Types = access.find((role) => role === user?.type);
    if(user.type !== "" && token) {
      if (Types === user?.type) {
        return <Outlet />;
      }else{
        return <Navigate to="unauthorized" replace />;
      }
    }
  } else {
    return <Navigate to="login" replace />;
  }
};

export default UserFilter;
