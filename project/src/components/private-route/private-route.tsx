import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AppRoute,AuthorizationStatus } from '../const/const';

type PrivateRouteProps = RouteProps & {
 // render: () => JSX.Element;
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute (props: PrivateRouteProps):JSX.Element{
  const {exact, path, authorizationStatus, component, children} = props;
  return(
    <Route exact = {exact} path = {path} component = {component}>
      {authorizationStatus === AuthorizationStatus.Auth ? (
        children
      ) : (
        <Redirect to={AppRoute.Login} />
      )}
    </Route>
  );}

export default PrivateRoute;
