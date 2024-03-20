import React from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { Card, Icon } from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

import { Text, Link } from 'components';
import { IUserInfo } from 'interfaces';

import styles from './UserCard.module.scss';

interface IProps {
	user: IUserInfo;
}

const UserCard: React.FC<IProps> = ({ user }) => {
	const { receiverUsername } = useParams();

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
			</Card>
		</Link>
	);
};

export default UserCard;
