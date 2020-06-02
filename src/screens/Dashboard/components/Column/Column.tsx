import React, { FC } from 'react';

type ColumnProps = {
	size: string;
};

const Column: FC<ColumnProps> = ({ children, size }) => (
	<div
		className={`my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 md:my-2 md:px-2 lg:my-3 lg:px-3 lg:w-${size} xl:my-3 xl:px-3 xl:w-${size} `}
	>
		{children}
	</div>
);

export default Column;
