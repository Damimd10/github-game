import React, { FC } from 'react';

import User from '../User';

import rankingIcon from '../../../../icons/ranking.svg';

interface Props {
	users: {
		avatar: string
		github_username: string
		score: number
	}[]
}

const Ranking: FC<Props> = ({ users }) => (
	<>
		<section className="rounded-t-lg px-6 custom-col">
			<header className="py-4 flex justify-between items-center">
				<div className="flex items-center space-x-4">
					<img alt="Top 10 Users" src={rankingIcon} />
					<span className="text-3xl text-white font-semibold">
						Top 10 Ranking
					</span>
				</div>
			</header>
		</section>
		<div className="my-1 px-4 flex justify-between items-center custom-col">
			<span className="text-xl text-white font-medium opacity-50">
				User name
			</span>
			<span className="text-xl text-white font-medium opacity-50">
				Total Score
			</span>
		</div>
		<section className="flex flex-col justify-center custom-col">
			{users.map(u => (
				<User 
					key={u.github_username} 
					name={u.github_username} 
					score={u.score} 
					avatar={u.avatar} />
				))}
		</section>
	</>
);

export default Ranking;
