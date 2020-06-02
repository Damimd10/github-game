import React, { FC } from 'react';

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
					<div className="h-20 w-24 rounded-lg progress-square" />
					<div className="h-20 w-full p-2 rounded-lg progress-square">
						<div className="flex justify-between items-center">
							<div className="text-lg text-white font-semibold font-custom-common">
								Achievement One
							</div>
							<div className="text-sm text-white font-normal font-custom-common opacity-25">
								Unlocked 29 May 2020
							</div>
						</div>

						<div className="text-xs text-white opacity-50 font-normal font-custom-common">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum
						</div>
					</div>
				</div>
			</section>
		</section>
	</>
);

export default Achievements;
