import React, { FC, useState } from 'react';

import Achievement from '../Achievement';
import ProgressBar from '../ProgressBar';
import Tab from '../Tab';

import achievementIcon from '../../../../icons/achievement.svg';

enum Tabs {
	Unlocked = 'Unlocked',
	Locked = 'Locked',
}

interface Achievement {
	title: string;
	description: string;
	image?: string;
	score: number;
}

interface Props {
	achievements: {
		locked: Achievement[];
		unlocked: Achievement[];
	};
}

const Achievements: FC<Props> = ({ achievements }) => {
	const [activeTab, setActiveTab] = useState<Tabs>(Tabs.Unlocked);

	const unlocked = achievements.unlocked.length;
	const totalLength = unlocked + achievements.locked.length;
	const percentage = ((unlocked * 100) / totalLength).toFixed(0);

	const handleSelect = (e: React.MouseEvent<HTMLElement>) =>
		setActiveTab((e.target as any).dataset.id);

	return (
		<>
			<section className="rounded-t-lg px-6 custom-col">
				<header className="py-4 flex justify-between items-center">
					<div className="flex items-center space-x-4">
						<img alt="Achievements" src={achievementIcon} />
						<span className="text-3xl text-white font-semibold">
							Achievements
						</span>
					</div>
					<div className="space-y-4">
						<div className="text-md text-white font-semibold">
							{unlocked} of {totalLength} ({percentage}%) Achievements Done
						</div>
						<div>
							<ProgressBar color="bg-teal-400" progress={Number(percentage)} />
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
					<div className="space-y-6 flex flex-col justify-center">
						{activeTab === Tabs.Unlocked &&
							(achievements.unlocked.length === 0 ? (
								<div>No sacaste nada pa</div>
							) : (
								achievements.unlocked.map(a => (
									<Achievement
										key={a.title}
										image={a.image}
										title={a.title}
										description={a.description}
										unlocked
									/>
								))
							))}

						{activeTab === Tabs.Locked &&
							(achievements.locked.length === 0 ? (
								<div>Sacaste todo pa</div>
							) : (
								achievements.locked.map(a => (
									<Achievement
										key={a.title}
										image={a.image}
										title={a.title}
										description={a.description}
									/>
								))
							))}
					</div>
				</section>
			</section>
		</>
	);
};

export default Achievements;
