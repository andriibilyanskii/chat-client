import React, { useState } from 'react';
import classNames from 'classnames';

import { Input, UserCard } from 'components/index';

import { IUserInfo } from 'interfaces';
import { useAppContext } from 'utils';

import { useAppSelector } from 'store/redux-hooks';
import { SELECTORS } from 'store/selectors';

import styles from './Users.module.scss';

interface IProps {
	className?: string;
}

const Users: React.FC<IProps> = ({ className = '' }) => {
	const users: IUserInfo[] = useAppSelector(SELECTORS.getChatStore)?.users;
	const { userInfo } = useAppContext();

	const [searchUsername, setSearchUsername] = useState('');

	return (
		<div
			className={classNames({
				[styles['users']]: true,
				[className]: className,
			})}
		>
			<Input
				value={searchUsername}
				onChange={setSearchUsername}
				label={'Search user'}
				placeholder={'Enter username...'}
			/>

			{users
				?.filter((user) => {
					const notMe = user?.username !== userInfo?.username;

					if (searchUsername) {
						return (
							user?.username
								?.toLowerCase()
								?.includes(searchUsername?.toLowerCase()) && notMe
						);
					}

					return notMe;
				})
				?.map((user) => <UserCard key={user?.socketID} user={user} />)}
		</div>
	);
};

export default Users;
