import React, { FC, ComponentProps } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute: FC<ComponentProps<typeof Route>> = props => {
	try {
		const json = localStorage.getItem('ghg');

		if (!json) {
			return <Redirect to="/login" />;
		}

		const { token, login } = JSON.parse(json);

		if (!token || !login) {
			return <Redirect to="/login" />;
		}

		return <Route {...props} />;
	} catch {
		return <Redirect to="/login" />;
	}
};

export default PrivateRoute;
