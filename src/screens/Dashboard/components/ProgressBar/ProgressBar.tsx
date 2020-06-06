import React, { FC } from 'react';

type ProgressBarProps = {
	color: string;
	progress: number;
};

const ProgressBar: FC<ProgressBarProps> = ({ color, progress }) => {
	return (
		<div className="h-4 shadow rounded-lg progress-bg">
			<div
				className={`h-4 ${color}  rounded-lg text-xs leading-none py-1 text-center text-white`}
				style={{ width: `${progress}%` }}
			/>
		</div>
	);
};

export default ProgressBar;
