import React from "react";
import { useAuthContext } from "../context/AuthContext";

function Navbar(): JSX.Element {
  const user = useAuthContext();
  return <div />;
}

export default Navbar;
