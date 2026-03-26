import { Navigate, Outlet } from 'react-router';

import { useAuthStore } from '../../../stores';
import { LoadingSpinner } from '../../common';

const PublicRoute = () => {
  const { user, loading } = useAuthStore();

  if (loading) return <LoadingSpinner fullScreen />;
  if (user) return <Navigate to="/admin" replace />;

  return <Outlet />;
};

export default PublicRoute;
