import React, { FC, useEffect, useState } from 'react';
import { useAuth0 } from '../../utils';

import Achievement from './components/Achievement';
import Stat from './components/Stat';

const DashboardLayout: FC = () => {
	const [achievements, setAchievements] = useState([]);
	const { user, logout } = useAuth0();

	useEffect(() => {
		fetch('http://localhost:4000/api/getUser/damimd10')
			.then(response => response.json())
			.then(response => setAchievements(response.achievements_unlocked));
	}, []);

	const score = achievements.reduce(
		(accumulator, { score }) => accumulator + score,
		0
	);

	return (
		<section className="m-2 flex justify-content-center align-items-center">
			<section className="w-full text-gray-700 body-font">
				<div className="m-2">
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
			</section>
		</section>
	);
};

export default DashboardLayout;
