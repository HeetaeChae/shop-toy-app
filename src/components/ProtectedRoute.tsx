import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { User } from "../types/userType.d";

interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute(props: ProtectedRouteProps): JSX.Element {
  const { children } = props;

  const user: User | null = useAuthContext();

  if (!user) {
    return <Navigate to={"/"} />;
  }

  return <div>{children}</div>;
}

export default ProtectedRoute;
