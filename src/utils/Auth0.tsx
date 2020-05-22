import React, {
	FC,
	createContext,
	useState,
	useEffect,
	useContext,
} from 'react'
import createAuth0Client, { Auth0Client } from '@auth0/auth0-spa-js'

const DEFAULT_REDIRECT_CALLBACK = () =>
	window.history.replaceState({}, document.title, window.location.pathname)

interface Auth0Context {
	isAuthenticated: boolean
	loginWithRedirect: () => void
	loginWithPopup: () => void
	logout: () => void
	user: any
	loading: boolean
}

export const Auth0Context = createContext<Auth0Context>({
	isAuthenticated: false,
	loginWithRedirect: () => {},
	loginWithPopup: () => {},
	logout: () => {},
	user: undefined,
	loading: false,
})

export const useAuth0 = () => useContext(Auth0Context)

interface Props {
	onRedirectCallback?: (appState: {}) => void
	domain: string
	client_id: string
	redirect_uri?: string
}

export const Auth0Provider: FC<Props> = ({
	children,
	onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
	domain,
	client_id,
	redirect_uri,
}) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [user, setUser] = useState()
	const [auth0Client, setAuth0] = useState<Auth0Client>()
	const [loading, setLoading] = useState(true)
	const [popupOpen, setPopupOpen] = useState(false)

	useEffect(() => {
		const initAuth0 = async () => {
			const auth0FromHook = await createAuth0Client({
				domain,
				client_id,
				redirect_uri,
			})

			setAuth0(auth0FromHook)

			if (
				window.location.search.includes('code=') &&
				window.location.search.includes('state=')
			) {
				const { appState } = await auth0FromHook.handleRedirectCallback()
				onRedirectCallback(appState)
			}

			const isAuthenticated = await auth0FromHook.isAuthenticated()

			setIsAuthenticated(isAuthenticated)

			if (isAuthenticated) {
				const user = await auth0FromHook.getUser()
				setUser(user)
			}

			setLoading(false)
		}
		initAuth0()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (!auth0Client) return null

	const loginWithPopup = async (params = {}) => {
		setPopupOpen(true)
		try {
			await auth0Client.loginWithPopup(params)
		} catch (error) {
			console.error(error)
		} finally {
			setPopupOpen(false)
		}
		const user = await auth0Client.getUser()
		setUser(user)
		setIsAuthenticated(true)
	}

	const handleRedirectCallback = async () => {
		setLoading(true)
		await auth0Client.handleRedirectCallback()
		const user = await auth0Client.getUser()
		setLoading(false)
		setIsAuthenticated(true)
		setUser(user)
	}

	return (
		<Auth0Context.Provider
			value={{
				isAuthenticated,
				user,
				loading,
				// @ts-ignore
				popupOpen,
				loginWithPopup,
				handleRedirectCallback,
				// @ts-ignore
				getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
				// @ts-ignore
				loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
				// @ts-ignore
				getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
				// @ts-ignore
				getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
				// @ts-ignore
				logout: (...p) => auth0Client.logout(...p),
			}}
		>
			{children}
		</Auth0Context.Provider>
	)
}
