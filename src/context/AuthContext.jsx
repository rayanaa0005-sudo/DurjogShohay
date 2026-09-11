import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {

        const getProfile = async () => {

            try {

                const response = await fetch("http://localhost:5001/api/profile", {
                    credentials: "include"
                });

                const data = await response.json();

                if (response.ok) {
                    setUser(data.user);
                }

            } catch (error) {

                console.log("Not logged in");

            }

        };

        getProfile();

    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}