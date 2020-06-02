import React, { FC } from 'react';

import ProgressBar from '../ProgressBar';

const Profile: FC = () => {
	return (
		<div className="rounded-tl-lg px-6 custom-col">
			<section>
				<div className="flex flex-wrap items-center pt-6">
					<div className="w-24 h-24 relative mr-5">
						<div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
							<img
								src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
								alt="lovely avatar"
								className="object-cover object-center w-full h-full visible group-hover:hidden"
							/>
						</div>
					</div>
					<div>
						<div className="text-xl text-white font-light italic font-custom-common">
							Good morning
						</div>
						<div className="text-3xl text-white font-bold font-circular">
							Taylor Kang
						</div>
					</div>
				</div>
			</section>
			<section className="mt-6 text-lg text-white font-custom-common font-normal opacity-50">
				<div>Welcome back to your dashboard.</div>
				<div>Happy Coding!</div>
			</section>
			<section className="py-6">
				<div className="flex h-20 p-2 progress-section">
					<div className="h-full w-24 rounded-lg progress-square" />
					<div className="w-full flex flex-col justify-center px-4">
						<div className="w-full flex justify-between items-center">
							<span className="text-lg text-white font-medium font-custom-common">
								Achievements
							</span>
							<span className="text-lg text-white font-medium font-custom-common opacity-25">
								65%
							</span>
						</div>
						<ProgressBar color="bg-blue-500" progress={45} />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Profile;
