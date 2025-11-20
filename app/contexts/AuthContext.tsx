import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { authService } from "../lib/api/services/auth.service";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  setAuthFromPayment: (token: string) => void;
}

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in on mount
    const token = localStorage.getItem("access_token");
    if (token) {
      fetchUserProfile(token);
    } else {
      setIsLoading(false);
    }
  }, []);

  const fetchUserProfile = async (token: string) => {
    try {
      const response = await authService.getProfile();
      setUser(response.user);
    } catch (error) {
      console.error("Error fetching user profile:", error);
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("user");
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await authService.login({ email, password });
      setUser(response.user);
      router.push("/orders");
    } catch (error: any) {
      console.error("Login error:", error);
      throw new Error(
        error.response?.data?.message || error.message || "Login failed"
      );
    }
  };

  const register = async (registerData: RegisterData) => {
    try {
      const response = await authService.register(registerData);
      setUser(response.user);
      router.push("/orders");
    } catch (error: any) {
      console.error("Registration error:", error);
      throw new Error(
        error.response?.data?.message || error.message || "Registration failed"
      );
    }
  };

  const logout = async () => {
    setUser(null);
    // try {
    // await authService.logout();
    // } finally {
    //   router.push("/");
    // }
  };

  const setAuthFromPayment = (token: string) => {
    localStorage.setItem("access_token", token);
    fetchUserProfile(token);
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, login, register, logout, setAuthFromPayment }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
