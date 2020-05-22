import React, { FC, useEffect } from 'react'
import { useAuth0 } from '../../utils'
import { Redirect } from 'react-router-dom'

const Login: FC = () => {
	const { isAuthenticated, loginWithRedirect } = useAuth0()

	const isRedirectedFromAuth =
		window.location.search.includes('code=') &&
		window.location.search.includes('state=')

	console.log('isAuthenticated login', isAuthenticated)

	useEffect(() => {
		if (!isAuthenticated && !isRedirectedFromAuth) {
			loginWithRedirect()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (isAuthenticated) {
		return <Redirect to="/dashboard" />
	}

	return null
}

export default Login
