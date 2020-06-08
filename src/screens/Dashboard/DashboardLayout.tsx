import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Achievements from './components/Achievements';
import Column from './components/Column';
import Profile from './components/Profile';
import Ranking from './components/Ranking';

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
		<main className="h-screen w-full flex flex-wrap tracking-wide">
			<Column size="1/5">
				<Profile />
			</Column>

			<Column size="3/5">
				<Achievements />
			</Column>

			<Column size="1/5">
				<Ranking />
			</Column>
		</main>
	);
};

export default DashboardLayout;
