import React from "react";
import { Outlet } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "@tanstack/react-query";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import "./App.css";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./error/ErrorBoundary";
import ErrorComponent from "./components/ErrorComponent";

function App(): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset} fallback={ErrorComponent}>
            <ThemeContextProvider>
              <AuthContextProvider>
                <Navbar />
                <Outlet />
              </AuthContextProvider>
            </ThemeContextProvider>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  );
}

export default App;
