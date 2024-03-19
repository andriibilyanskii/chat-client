import React from 'react';

import { Text, UserCard } from 'components/index';

import styles from './Users.module.scss';
import { IUserInfo } from '../../../interfaces';
import { useAppSelector } from '../../../store/redux-hooks';
import { SELECTORS } from '../../../store/selectors';
import classNames from 'classnames';
import { useAppContext } from '../../../utils';

interface IProps {
	className?: string;
}

const Users: React.FC<IProps> = ({ className = '' }) => {
	const users: IUserInfo[] = useAppSelector(SELECTORS.getChatStore)?.users;
	const { userInfo } = useAppContext();

	return (
		<div
			className={classNames({
				[styles['users']]: true,
				[className]: className,
			})}
		>
			{users
				?.filter((user) => user?.username !== userInfo?.username)
				?.map((user) => <UserCard key={user?.socketID} user={user} />)}
		</div>
	);
};

export default Users;
