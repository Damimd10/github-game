import React, { FC } from 'react';
import cn from 'classnames';

type TabProps = {
	active?: boolean;
	onSelect: (e: React.MouseEvent<HTMLElement>) => void;
	title: string;
};

const Tab: FC<TabProps> = ({ active, onSelect, title }) => {
	const linkActiveClass = 'text-xl text-yellow-600 opacity-100';
	const linkClass =
		'text-lg text-white font-semibold opacity-50 cursor-pointer hover:opacity-100 hover:text-yellow-500';

	const className = active ? cn(linkClass, linkActiveClass) : linkClass;

	return (
		<a href="#$" data-id={title} className={className} onClick={onSelect}>
			{title}
		</a>
	);
};

export default Tab;
