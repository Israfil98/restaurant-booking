import { Navigate, Outlet } from 'react-router';

import { useAuthStore } from '../../../stores';

const PublicRoute = () => {
  const { user, loading } = useAuthStore();

  if (loading) {
    return (
      <div className="bg-warm-dark flex min-h-screen items-center justify-center">
        <p className="text-warm-gray">Loading...</p>
      </div>
    );
  }

  if (user) {
    return <Navigate to="/admin" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
