import React, { FC } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from '../utils';

import { DashboardScreen, LoginScreen } from '../screens';

const App: FC = () => {
	return (
		<main className="app">
			<BrowserRouter>
				<Switch>
					<Route exact path="/login" component={LoginScreen} />
					<PrivateRoute exact path="/dashboard" component={DashboardScreen} />
					<PrivateRoute render={() => <Redirect to="/dashboard" />} />
				</Switch>
			</BrowserRouter>
		</main>
	);
};

export default App;
