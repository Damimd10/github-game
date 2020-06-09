import React, { FC } from 'react';

import lockIcon from '../../../../icons/lock.svg';
import trophyIcon from '../../../../icons/trophy.svg';
import trophyHiddenIcon from '../../../../icons/trophy-hidden.svg';
import trophyLockedIcon from '../../../../icons/trophy-locked.svg';

type Props = {
	image?: string
	title: string
	description: string
	hidden?: boolean;
	unlocked?: boolean;
};

const Achievement: FC<Props> = ({ 
	image, 
	title, 
	description, 
	hidden, 
	unlocked 
}) => {
	const icon = hidden
		? trophyHiddenIcon
		: unlocked
		? trophyIcon
		: trophyLockedIcon;
	return (
		<section className="flex space-x-4 items-center">
			<div className="relative h-20 w-24 rounded-lg bg-box flex items-center justify-center">
				<img alt="Trophy" src={icon} />
				{!unlocked && !hidden && (
					<div className="absolute lock-box">
						<img alt="Locked" src={image || lockIcon} />
					</div>
				)}
			</div>
			<div className="h-20 w-full p-2 rounded-lg bg-box">
				<div className="flex justify-between items-center">
					<div className="text-lg text-white font-semibold">
						{title}
					</div>
					{/* {unlocked && (
						<div className="text-sm text-white font-normal opacity-25">
							Unlocked 29 May 2020
						</div>
					)} */}
				</div>

				<div className="text-xs text-white opacity-50 font-normal">
					{description}
				</div>
			</div>
		</section>
	);
};

export default Achievement;
