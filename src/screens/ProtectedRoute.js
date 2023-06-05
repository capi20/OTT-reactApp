import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const ProtectedRoute = ({ children }) => {
	const { isAuth } = useAppContext();

	if (!isAuth) {
		return <Navigate to="/login" />;
	}

	return children;
};
export default ProtectedRoute;
