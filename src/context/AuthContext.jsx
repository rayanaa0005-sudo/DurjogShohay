import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProfile = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5001/api/profile",
                    {
                        credentials: "include"
                    }
                );

                const data = await response.json();

                if (response.ok) {
                    setUser(data.user);
                } else {
                    setUser(null);
                    if (response.status === 401 && window.location.pathname !== "/login") {
                    window.location.href = "/login";
                    }
                }
            } catch (error) {
                console.log("Not logged in");
                setUser(null);
            }
        };

        getProfile();
    }, []);

    const logout = async () => {
        try {
            const response = await fetch(
                "http://localhost:5001/api/logout",
                {
                    method: "POST",
                    credentials: "include"
                }
            );

            if (response.ok) {
                setUser(null);
            }
        } catch (error) {
            console.log("Logout error:", error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}