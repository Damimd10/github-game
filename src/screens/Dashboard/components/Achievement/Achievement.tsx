import React, { FC } from 'react';

type AchievementProp = {
	unlocked?: boolean;
};

const Achievement: FC<AchievementProp> = ({ unlocked }) => (
	<section className="flex space-x-4 items-center">
		<div className="h-20 w-24 rounded-lg bg-box" />
		<div className="h-20 w-full p-2 rounded-lg bg-box">
			<div className="flex justify-between items-center">
				<div className="text-lg text-white font-semibold">
					Achievement One
				</div>
				{unlocked && (
					<div className="text-sm text-white font-normal opacity-25">
						Unlocked 29 May 2020
					</div>
				)}
			</div>

			<div className="text-xs text-white opacity-50 font-normal">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum
			</div>
		</div>
	</section>
);

export default Achievement;
