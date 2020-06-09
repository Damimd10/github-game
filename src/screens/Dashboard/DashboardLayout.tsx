import React, { FC, useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';

import Achievements from './components/Achievements';
import Column from './components/Column';
import Profile from './components/Profile';
import Ranking from './components/Ranking';

import './dashboard.css';

interface User {
	github_username: string;
	avatar: string;
	achievements: Achievements
	score: number
}

interface Achievements {
	locked: Achievement[],
	unlocked: Achievement[]
}

interface Achievement {
  title: string;
  description: string;
  image?: string;
  score: number;
}

const DashboardLayout: FC = () => {
	// const history = useHistory();
	const [user, setUser] = useState<User>();
	const [ranking, setRanking] = useState<User[]>();

	const { login } = JSON.parse(localStorage.getItem('ghg') as string);

	useEffect(() => {
		fetch(`http://localhost:4000/api/getUser/${login}`)
			.then(response => response.json())
			.then(setUser);
	}, [login]);

	useEffect(() => {
		fetch(`http://localhost:4000/api/ranking`)
			.then(response => response.json())
			.then(setRanking)
	}, [])

	/* const logout = () => {
		localStorage.removeItem('ghg');
		history.push('/login');
	}; */

	return (
		<main className="h-screen w-full flex flex-wrap tracking-wide">
			<Column size="1/4">
				{user && (
					<Profile 
						name={user.github_username} 
						avatar={user.avatar} 
						achievements={user.achievements} />
				)}
			</Column>

			<Column size="1/2">
				{user && (
					<Achievements achievements={user.achievements} />
				)}
			</Column>
			
			<Column size="1/4">
				{ranking && (
					<Ranking users={ranking} />
				)}
			</Column>
		</main>
	);
};

export default DashboardLayout;
