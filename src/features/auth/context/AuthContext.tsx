import { createContext } from "react";
import type { Session, User } from "@supabase/supabase-js";

import type {
  SignInData,
  SignUpData,
} from "../services/auth.service";

export interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;

  signIn: (credentials: SignInData) => Promise<void>;
  signUp: (credentials: SignUpData) => Promise<void>;
  signOut: () => Promise<void>;
  refreshSession: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);