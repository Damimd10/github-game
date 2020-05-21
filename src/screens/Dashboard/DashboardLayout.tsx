import React, { FC } from 'react'
import { useAuth0 } from '../../utils'

const DashboardLayout: FC = () => {
	const { user, logout } = useAuth0()

	return (
		<div>
			{JSON.stringify(user)}
			<button onClick={logout}>LOGOUT</button>
		</div>
	)
}

export default DashboardLayout
