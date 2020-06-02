import React, { FC } from 'react';

const Achievement: FC<{}> = () => (
	<div className="flex items-center space-x-2">
		<div className="h-20 w-24 rounded-lg progress-square" />
		<div className="h-20 w-full rounded-lg progress-square"></div>
	</div>
);

export default Achievement;
