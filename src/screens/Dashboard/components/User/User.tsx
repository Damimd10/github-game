import React, { FC } from 'react';

const User: FC = () => (
	<div className="my-2 mx-4 p-2 rounded-lg flex items-center bg-box">
		<div className="h-16 w-20 rounded-lg bg-box" />
		<div className="px-4 flex flex-col justify-center">
			<span className="text-xl text-white font-medium">
				@githubuser
			</span>
			<span className="text-base text-white font-normal opacity-50">
				https://github.com/github-user
			</span>
		</div>
		<div className="mr-4 text-xl text-white font-medium ml-auto">
			1123
		</div>
	</div>
);

export default User;
