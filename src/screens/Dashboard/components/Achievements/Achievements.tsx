import React, { FC, useState } from 'react';

import Achievement from '../Achievement';
import ProgressBar from '../ProgressBar';
import Tab from '../Tab';

enum Tabs {
	Unlocked = 'Unlocked',
	Locked = 'Locked',
	Hidden = 'Hidden',
}

const Achievements: FC<{}> = () => {
	const [activeTab, setActiveTab] = useState<Tabs>(Tabs.Locked);

	const handleSelect = (e: any) => setActiveTab(e.target.dataset.id);

	return (
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
					{Object.keys(Tabs).map(key => (
						<Tab
							key={key}
							active={activeTab === key}
							title={key}
							onSelect={handleSelect}
						/>
					))}
				</div>
				<section>
					<div className="flex items-center space-x-2">
						<Achievement unlocked />
					</div>
				</section>
			</section>
		</>
	);
};

export default Achievements;
