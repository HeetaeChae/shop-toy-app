import React from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import "./App.css";
import Navbar from "./components/Navbar";

function App(): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Outlet />
        </AuthContextProvider>
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}

export default App;
