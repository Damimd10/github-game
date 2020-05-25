import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Achievement from './components/Achievement';
import Ranking from './components/Ranking';
import Stat from './components/Stat';

const DashboardLayout: FC = () => {
	const history = useHistory();
	const [achievements, setAchievements] = useState([]);

	const { login } = JSON.parse(localStorage.getItem('ghg') as string);

	useEffect(() => {
		fetch(`http://localhost:4000/api/getUser/${login}`)
			.then(response => response.json())
			.then(response => setAchievements(response.achievements_unlocked));
	}, [login]);

	const score = achievements.reduce(
		(accumulator, { score }) => accumulator + score,
		0
	);

	const logout = () => {
		localStorage.removeItem('ghg');
		history.push('/login');
	};

	return (
		<section className="m-2 flex justify-content-center align-items-center">
			<section className="w-full text-gray-700 body-font">
				<div className="m-2">
					<button onClick={() => logout()}>Welcome {login} - LOGOUT</button>
					<div className="container px-2 py-2 mx-auto">
						<div className="flex flex-wrap text-center">
							<Stat label="score" value={score} />
							<Stat label="unlocked achievements" value={achievements.length} />
							<Stat label="locked achievements" value={0} />
						</div>
					</div>
				</div>
				<div className="w-full flex flex-wrap m-2">
					{achievements.map(achievement => (
						<Achievement key={JSON.stringify(achievement)} {...achievement} />
					))}
				</div>
				<Ranking />
			</section>
		</section>
	);
};

export default DashboardLayout;
