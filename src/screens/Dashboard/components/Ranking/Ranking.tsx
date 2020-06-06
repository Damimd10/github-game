import React, { FC } from 'react';

const Ranking: FC = () => (
	<>
		<section className="rounded-t-lg px-6 custom-col">
			<header className="py-4 flex justify-between items-center">
				<div className="text-3xl font-custom-common text-white font-semibold">
					Top 10 Ranking
				</div>
			</header>
		</section>
		<div className="mt-1 px-4 flex justify-between items-center custom-col">
			<span className="text-xl text-white font-medium opacity-50 font-custom-common">User name</span>
			<span className="text-xl text-white font-medium opacity-50 font-custom-common">Total Score</span>
		</div>
		<div className="mt-1 p-2 flex items-center custom-col">
			<div className="h-16 w-20 rounded-lg progress-square" />
			<div className="px-4 flex flex-col justify-center">
				<span className="text-xl text-white font-medium font-custom-common">@githubuser</span>
				<span className="text-base text-white font-normal opacity-50 font-custom-common">https://github.com/github-user</span>
			</div>
			<div className="mr-4 text-xl text-white font-medium ml-auto font-custom-common">1123</div>
		</div>
	</>
);

export default Ranking;
