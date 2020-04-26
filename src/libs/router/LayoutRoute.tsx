/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface LayoutRouteProps extends RouteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  layout?: any;
  element: React.ReactNode;
}

export const LayoutRoute: React.FC<LayoutRouteProps> = ({ layout: Layout, element, ...rest }) => {
  if (Layout)
    return (
      <Layout>
        <Route {...rest} render={(): React.ReactNode => element} />
      </Layout>
    );
  return <Route {...rest} render={(): React.ReactNode => element} />;
};

export default LayoutRoute;
