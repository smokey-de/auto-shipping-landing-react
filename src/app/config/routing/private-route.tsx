import { Outlet } from 'react-router-dom';

import { Layout } from '@/widgets/layout';


export const PrivateRoute = () => {

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
