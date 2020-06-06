import React, { FC } from 'react';

type AchievementProp = {
	unlocked?: boolean;
};

const Achievement: FC<AchievementProp> = ({ unlocked }) => (
	<>
		<div className="h-20 w-24 rounded-lg progress-square" />
		<div className="h-20 w-full p-2 rounded-lg progress-square">
			<div className="flex justify-between items-center">
				<div className="text-lg text-white font-semibold font-custom-common">
					Achievement One
				</div>
				{unlocked && (
					<div className="text-sm text-white font-normal font-custom-common opacity-25">
						Unlocked 29 May 2020
					</div>
				)}
			</div>

			<div className="text-xs text-white opacity-50 font-normal font-custom-common">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum
			</div>
		</div>
	</>
);

export default Achievement;
