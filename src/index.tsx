import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './app'
import * as serviceWorker from './serviceWorker'

import { Auth0Provider } from './utils'
import config from './config'

ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider
			domain={config.domain}
			client_id={config.clientId}
			redirect_uri={config.redirectURI}
			// onRedirectCallback={(appState: any) => {
			// 	console.log('appState', appState)
			// }}
		>
			<App />
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
