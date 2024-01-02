import { useAuthContext } from "../context/AuthContext";
import { User } from "../types/userType";

function useOwnContent(authorId: number) {
  const user: User | null = useAuthContext();

  return user?.id === authorId;
}

export default useOwnContent;
