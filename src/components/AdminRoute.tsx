import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { User } from "../types/userType.d";

interface AdminRouteProps {
  children: ReactNode;
}

function AdminRoute(props: AdminRouteProps): JSX.Element {
  const { children } = props;

  const user: User | null = useAuthContext();

  if (!user || user.roles !== 1) {
    return <Navigate to={"/"} />;
  }

  return <div>{children}</div>;
}

export default AdminRoute;
