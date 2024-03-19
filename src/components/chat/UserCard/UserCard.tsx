import React from 'react';
import classNames from 'classnames';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Icon } from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

import { Text, AuthLayout, Link, Button, Input, Users } from 'components';

import { fetchData, formatDate, useAppContext } from 'utils';

import styles from './UserCard.module.scss';
import { IMessage, IUserInfo } from '../../../interfaces';
import { useAppSelector } from '../../../store/redux-hooks';
import { SELECTORS } from '../../../store/selectors';

interface IProps {
	user: IUserInfo;
}

const UserCard: React.FC<IProps> = ({ user }) => {
	const { userInfo } = useAppContext();
	const { receiverUsername } = useParams();

	const messages: IMessage[] = useAppSelector(SELECTORS.getChatStore)?.messages;
	const message = messages
		?.filter(
			(m) =>
				(m?.usernameFrom === userInfo?.username && m?.usernameTo === user?.username) ||
				(m?.usernameFrom === user?.username && m?.usernameTo === userInfo?.username)
		)
		?.at(-1);

	return (
		<Link to={'/' + user?.username}>
			<Card
				className={classNames({
					[styles.userCard]: true,
					[styles.userCard_selected]: user?.username === receiverUsername,
				})}
			>
				<Icon color={user?.isOnline ? 'success' : 'error'}>
					<PersonRoundedIcon />
				</Icon>

				<Text className={styles['userCard-username']}>{user?.username}</Text>

				<Text variant={'caption'}>
					{formatDate(message?.createdDate, {
						onlyHours: true,
					})}
				</Text>
			</Card>
		</Link>
	);
};

export default UserCard;
