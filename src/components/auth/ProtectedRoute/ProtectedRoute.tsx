import { Navigate, Outlet } from 'react-router';

import { useAuthStore } from '../../../stores';
import { LoadingSpinner } from '../../common';

const ProtectedRoute = () => {
  const { user, loading } = useAuthStore();

  if (loading) return <LoadingSpinner fullScreen />;
  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
