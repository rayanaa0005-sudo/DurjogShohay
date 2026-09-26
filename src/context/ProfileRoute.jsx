import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext.jsx";

function ProfileRoute({ children }) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProfileRoute;