import React, { FC } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from '../utils';

import { DashboardScreen, LoginScreen, LoginCallbackScreen } from '../screens';

const App: FC = () => {
	return (
		<main className="app">
			<BrowserRouter>
				<Switch>
					<Route exact path="/login" component={LoginScreen} />
					<Route exact path="/login-callback" component={LoginCallbackScreen} />
					<PrivateRoute exact path="/dashboard" component={DashboardScreen} />
					<PrivateRoute render={() => <Redirect to="/dashboard" />} />
				</Switch>
			</BrowserRouter>
		</main>
	);
};

export default App;
