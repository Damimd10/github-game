import React, { FC, useEffect, useState } from 'react';

const Ranking: FC = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4000/api/ranking')
			.then(response => response.json())
			.then(setUsers)
			.catch(error => error);
	}, []);

	return (
		<ul className="w-1/4 flex flex-col p-4">
			{users.map(({ avatar, github_username, score = 100 }) => (
				<li
					key={github_username}
					className="border-gray-400 flex flex-row mb-2"
				>
					<div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
						<div className="w-10 h-10 relative ml-2">
							<div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
								<span className="hidden group-hover:table-cell text-white font-bold align-middle">
									KR
								</span>
								<img
									src={avatar}
									alt="lovely avatar"
									className="object-cover object-center w-full h-full visible group-hover:hidden"
								/>
							</div>
						</div>
						<div className="flex-1 pl-1 mr-16">
							<div className="font-medium">{github_username}</div>
							<div className="text-gray-600 text-sm">Score: {score}</div>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Ranking;
