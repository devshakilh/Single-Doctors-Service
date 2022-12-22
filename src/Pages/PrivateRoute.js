import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="radial-progress text-primary" style={{ "--value": 70 }}>70%</div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
    // return <Navigate state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;