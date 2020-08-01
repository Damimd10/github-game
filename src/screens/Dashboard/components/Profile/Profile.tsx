import React, { FC } from 'react';

import ProgressBar from '../ProgressBar';

import locationIcon from '../../../../icons/location.svg';

interface Achievements {
	locked: Achievement[];
	unlocked: Achievement[];
}

interface Achievement {
	title: string;
	description: string;
	image?: string;
	score: number;
}

interface Props {
	name: string;
	avatar: string;
	achievements: Achievements;
}

const Profile: FC<Props> = ({ name, avatar, achievements }) => {
	const unlocked = achievements.unlocked.length;
	const totalLength = unlocked + achievements.locked.length;
	const percentage = ((unlocked * 100) / totalLength).toFixed(0);

	return (
		<div className="space-y-4 rounded-tl-lg px-6 custom-col">
			<section>
				<div className="flex flex-wrap items-center pt-6">
					<div className="w-24 h-24 relative mr-5">
						<div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
							<img
								src={
									avatar ||
									'https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png'
								}
								alt="avatar"
								className="object-cover object-center w-full h-full visible group-hover:hidden"
							/>
						</div>
					</div>
					<div>
						<div className="text-xl text-white font-light italic">
							Good morning
						</div>
						<div className="text-3xl text-white font-bold font-circular">
							{name}
						</div>
					</div>
				</div>
			</section>
			<section className="text-lg text-white font-normal opacity-50">
				<div>Welcome back to your dashboard.</div>
				<div>Happy Coding!</div>
			</section>
			<section className="p-6 flex items-center justify-center border profile-box-border rounded-lg">
				<div className="p-4 space-x-4 flex items-center rounded-lg">
					<span className="text-lg text-gray-300">254 Following</span>
				</div>
				<div className="p-4 space-x-4 flex items-center bg-box-blue rounded-lg">
					<span className="text-lg text-gray-300">2130 Followers</span>
				</div>
			</section>
			<section className="p-6 border profile-box-border rounded-lg">
				<div className="p-4 space-x-4 flex items-center bg-box-blue rounded-lg">
					<img alt="Location" src={locationIcon} />
					<span className="text-lg text-gray-300">
						12/1 Jonathan Street, New York, USA
					</span>
				</div>
			</section>
			<section className="py-6">
				<div className="flex h-20 p-2 progress-section">
					<div className="h-full w-24 rounded-lg bg-box-blue" />
					<div className="w-full flex flex-col justify-center px-4">
						<div className="w-full flex justify-between items-center">
							<span className="text-lg text-white font-medium ">
								Achievements
							</span>
							<span className="text-lg text-white font-medium  opacity-25">
								{percentage}%
							</span>
						</div>
						<ProgressBar color="bg-blue-500" progress={Number(percentage)} />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Profile;
