import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth.utils';

const ProtectedRoute = ({ type, children }) => {
	if (type === 'guest' && isAuthenticated()) {
		return <Navigate to="/" replace />;
	}

	if (type === 'private' && !isAuthenticated()) {
		return <Navigate to="/signin" replace />;
	}

	return children;
};

export default ProtectedRoute;
