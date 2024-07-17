import { onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { auth } from "~/firebaseConfig";

// Define types for the user object
interface User {
    // Define your user properties here
}

// Define types for the context
interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean | undefined;
    login: (email: string, password: string) => Promise<{ success: boolean; msg?: any }>;
    register: (email: string, password: string) => Promise<{ success: boolean; data?: User; msg?: any }>;
    logout: () => Promise<{ success: boolean; msg?: any }>;
}

// Define types for the AuthContextProvider props
interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
                // Assuming `user` is of type User from Firebase
                setUser(user as User);
                // when logging in you only get fraction of all user data so you need to implement the next
                // updateUserData(user.uid); 
            } else {
                setIsAuthenticated(false);
                setUser(null);
            }
        });
        return unsub;
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            return {success: true};
        } catch (e: any) {
            let msg = e.message;
            if (msg.includes('(auth/invalid-email)')) msg='Invalid email';
            if (msg.includes('(auth/invalid-credential')) msg='Wrong credentials';
            return { success: false, msg };
        }
    }

    const logout = async () => {
        try {
            await signOut(auth);
            return {success: true}
        } catch (e: any) {
            return {success: false, msg: e.message, error: e}
        }
    }

    const register = async (email: string, password: string) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            // Assuming `response.user` is of type User from Firebase
            return { success: true, data: response.user as User };
        } catch (e: any) {
            let msg = e.message;
            if (msg.includes('(auth/invalid-email)')) msg='Invalid email';
            if (msg.includes('(auth/email-already-in-use')) msg="This email is already in use";
            return { success: false, msg};
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const value = useContext(AuthContext);

    if (!value) {
        throw new Error('useAuth must be wrapped inside AuthContextProvider');
    }

    return value;
}
