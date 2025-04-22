import { ILoginDTO } from "./userInterface";

export interface User {
  id: number;
  name: string;
  email?: string;
  role?: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
  loginWithService: (data: ILoginDTO) => Promise<{ user: User; token: string }>;
  isAuthenticated: boolean;
}
