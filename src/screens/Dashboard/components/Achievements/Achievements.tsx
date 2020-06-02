import React, { FC } from 'react';

import Achievement from '../Achievement';
import ProgressBar from '../ProgressBar';

const Achievements: FC<{}> = () => (
	<>
		<section className="rounded-t-lg px-6 custom-col">
			<header className="py-4 flex justify-between items-center">
				<div className="text-3xl font-custom-common text-white font-semibold">
					Achievements
				</div>
				<div className="space-y-4">
					<div className="text-md text-white font-semibold font-custom-common">
						150 of 250 (60%) Achievements Done
					</div>
					<div>
						<ProgressBar color="bg-teal-400" progress={60} />
					</div>
				</div>
			</header>
		</section>
		<section className="mt-1 space-y-6 py-4 px-6 custom-col">
			<div className="flex items-center space-x-4">
				<div className="text-xl text-yellow-600 font-semibold font-custom-common">
					Unlocked
				</div>
				<div className="text-lg text-white font-semibold opacity-50 font-custom-common">
					Locked
				</div>
				<div className="text-lg text-white font-semibold opacity-50 font-custom-common">
					Unlocked
				</div>
			</div>
			<section>
				<div className="flex items-center space-x-2">
					<Achievement />
				</div>
			</section>
		</section>
	</>
);

export default Achievements;
