import React, { FC } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import queryString from 'query-string';

const LoginCallback: FC = () => {
	const location = useLocation();
	const { token, login } = queryString.parse(location.search);

	if (!token || !login) return <Redirect to="/login" />;

	localStorage.setItem('ghg', JSON.stringify({ token, login }));

	return <Redirect to="/dashboard" />;
};

export default LoginCallback;
