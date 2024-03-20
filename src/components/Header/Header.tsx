import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { Chat, ArrowBack, Logout } from '@mui/icons-material';

import { Text } from 'components';
import { useAppContext } from 'utils';
import { IUserInfo } from 'interfaces';

import { useAppSelector } from 'store/redux-hooks';
import { SELECTORS } from 'store/selectors';

import styles from './Header.module.scss';

const Header: React.FC = () => {
	const { userInfo, setUserInfo } = useAppContext();
	const { receiverUsername } = useParams();
	const users: IUserInfo[] = useAppSelector(SELECTORS.getChatStore)?.users;

	const history = useNavigate();

	const logout = () => {
		localStorage.removeItem('user');
		setUserInfo({} as IUserInfo);
		history('/auth/login');
		window.location.reload();
	};

	const isReceiverOnline = users?.find((u) => u?.username === receiverUsername)?.isOnline;

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar className={styles['header-toolbar']} sx={{ display: 'grid' }}>
					{receiverUsername ? (
						<IconButton
							onClick={() => history('/')}
							className={styles['header-toolbar-icon']}
						>
							<ArrowBack />
						</IconButton>
					) : (
						<Chat />
					)}

					<Text
						variant='h6'
						component='div'
						sx={{
							flexGrow: 1,
							visibility: !receiverUsername ? 'hidden' : 'visible',
						}}
					>
						{receiverUsername}{' '}
						<Text
							variant={'caption'}
							sx={{
								color: isReceiverOnline ? '#00ff00' : 'red',
								verticalAlign: 'top',
							}}
						>
							{isReceiverOnline ? 'Online' : 'Offline'}
						</Text>
					</Text>

					<Text
						variant='h6'
						component='div'
						sx={{
							visibility: receiverUsername ? 'hidden' : 'visible',
						}}
					>
						{userInfo?.username}
					</Text>

					<IconButton onClick={logout}>
						<Logout />
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
