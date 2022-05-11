import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AppStateType = any; // Todo: Before we gotta do auth setting

const mapStateToPropsForRedirect = (state: AppStateType) =>
  ({
    isAuth: state.auth.isAuth,
  } as MapPropsType);

type MapPropsType = {
  isAuth: boolean;
};

type DispatchPropsType = {};

export function withAuthRedirect<WCP>(
  WrappedComponent: React.ExoticComponent<React.ComponentPropsWithRef<() => JSX.Element>> & {
    readonly _result: () => JSX.Element;
  },
) {
  const RedirectComponent: FC<MapPropsType & DispatchPropsType> = props => {
    const { isAuth, ...restProps } = props;

    if (!isAuth) return <Navigate to="/" />;

    return <WrappedComponent {...(restProps as WCP)} />;
  };

  return connect<MapPropsType, DispatchPropsType, WCP, AppStateType>(mapStateToPropsForRedirect, {})(RedirectComponent);
}
