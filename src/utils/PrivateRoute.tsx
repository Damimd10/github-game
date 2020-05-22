import React, { FC, ComponentProps } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth0 } from './Auth0'

const PrivateRoute: FC<ComponentProps<typeof Route>> = props => {
	const { isAuthenticated } = useAuth0()

	console.log('isAuthenticated private route', isAuthenticated)

	console.log('privateRoute props', props)

	return isAuthenticated ? <Route {...props} /> : <Redirect to="/login" />
}

export default PrivateRoute
