import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../../../utils';

interface IPrivateRouter {
	children: React.ReactNode;
}

const PrivateRoute = (props: IPrivateRouter) => {
	const { userInfo } = useAppContext();

	if (!userInfo) {
		return <Navigate replace to='/auth/login' />;
	} else {
		return <>{props.children}</>;
	}
};

export default PrivateRoute;
