import React, { FC } from 'react';

import User from '../User'

const Ranking: FC = () => (
	<>
		<section className="rounded-t-lg px-6 custom-col">
			<header className="py-4 flex justify-between items-center">
				<div className="text-3xl font-custom-common text-white font-semibold">
					Top 10 Ranking
				</div>
			</header>
		</section>
		<div className="my-1 px-4 flex justify-between items-center custom-col">
			<span className="text-xl text-white font-medium opacity-50 font-custom-common">User name</span>
			<span className="text-xl text-white font-medium opacity-50 font-custom-common">Total Score</span>
		</div>
		<section className="flex flex-col justify-center custom-col">
      <User />
      <User />
    </section>
	</>
);

export default Ranking;
