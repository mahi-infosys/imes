import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
    return localStorage.getItem('authToken') !== null;
};

const ProtectedRoute = ({ children }) => {
    if (isAuthenticated()) {
        // If user is not authenticated, redirect to login page
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;