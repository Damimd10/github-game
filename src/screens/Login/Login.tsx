import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';
import config from '../../config';

const Login: FC = () => {
	const login = () => {
		const ghState = uuid();
		localStorage.setItem('ghgs', ghState);
		window.location.href = `https://github.com/login/oauth/authorize?client_id=${config.GITHUB_CLIENT}&redirect_uri=${config.GITHUB_REDIRECT}&scope=user:email&state=${ghState}`;
	};

	return (
		<div className="container mx-auto">
			<button onClick={() => login()}>Sign in with GitHub</button>
		</div>
	);
};

export default Login;
