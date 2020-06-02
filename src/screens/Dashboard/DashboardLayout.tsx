import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Achievements from './components/Achievements';
import Column from './components/Column';
import Profile from './components/Profile';

import './dashboard.css';

const DashboardLayout: FC = () => {
	const history = useHistory();
	const [achievements, setAchievements] = useState([]);

	const { login } = JSON.parse(localStorage.getItem('ghg') as string);

	useEffect(() => {
		fetch(`http://localhost:4000/api/getUser/${login}`)
			.then(response => response.json())
			.then(response => setAchievements(response.achievements_unlocked));
	}, [login]);

	/* const logout = () => {
		localStorage.removeItem('ghg');
		history.push('/login');
	}; */

	return (
		<main className="h-screen w-full flex flex-wrap">
			<Column size="1/4">
				<Profile />
			</Column>

			<Column size="1/2">
				<Achievements />
			</Column>

			<Column size="1/4">
				<div className="custom-col">Column 3</div>
			</Column>
		</main>
	);
};

export default DashboardLayout;
