import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { useAppContext } from '../../utils';
import { IUserInfo } from '../../interfaces';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
	const { setUserInfo, receiverUsername } = useAppContext();
	const history = useNavigate();

	const logout = () => {
		localStorage.removeItem('user');
		setUserInfo({} as IUserInfo);
		history('/auth/login');
		window.location.reload();
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						{receiverUsername}
					</Typography>
					<Button color='inherit' onClick={logout}>
						Logout
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
