import React from "react";
import { Navigate, Outlet } from "react-router-dom";

type IProtectedRoute = {
  jwt?: string | null;
  children?: any;
  redirect?: string;
};
function ProtectedRoute({ jwt, children, redirect = "/auth" }: IProtectedRoute) {
  if (!jwt) {
    return <Navigate to={redirect} replace />;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoute;
