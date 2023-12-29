import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../types/UserType.d";

const AuthContext = createContext<User | null>(null);

interface AuthContextProviderProps {
  children: ReactNode;
}

export function AuthContextProvider(
  props: AuthContextProviderProps,
): JSX.Element {
  const { children } = props;

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    //
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
