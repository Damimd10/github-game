import React, { FC } from 'react';

interface Props {
	name: string
	score: number
	avatar: string
}

const User: FC<Props> = ({ name, score, avatar }) => (
	<div className="my-2 mx-4 p-2 rounded-lg flex items-center bg-box">
		<div className="h-16 w-20 rounded-lg bg-box">
		<img
			src={avatar || "https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"}
			alt="avatar"
			className="object-cover object-center w-full h-full visible group-hover:hidden"
		/>
		</div>
		<div className="px-4 flex flex-col justify-center">
			<span className="text-xl text-white font-medium">
				<a href={`https://github.com/${name}`} rel="noopener noreferrer" target="_blank">
					@{name}
				</a> 
			</span>
			<span className="text-base text-white font-normal opacity-50">
				<a href={`https://github.com/${name}`} rel="noopener noreferrer" target="_blank">
					https://github.com/{name}
				</a>
			</span>
		</div>
		<div className="mr-4 text-xl text-white font-medium ml-auto">
			{score}
		</div>
	</div>
);

export default User;
