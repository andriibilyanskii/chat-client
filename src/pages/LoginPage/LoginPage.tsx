import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Text, AuthLayout, Link, Button, Icon, Input, AnimateHeight } from 'components';
import { CONSTANTS } from '../../constants';

import { fetchData, useAppContext } from 'utils';

import styles from './LoginPage.module.scss';

const LoginPage: React.FC = () => {
	const [username, setUsername] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const { setUserInfo, socket } = useAppContext();

	const history = useNavigate();

	return (
		<AuthLayout title={'Log in to your account'}>
			<form
				onSubmit={async (e: FormEvent<HTMLFormElement>) => {
					e?.preventDefault();

					socket.emit('newUser', { username, socketID: socket.id });

					localStorage.setItem('user', JSON.stringify({ username }));
					setUserInfo({ username });
					history('/');
				}}
			>
				<Input
					value={username}
					onChange={setUsername}
					placeholder={'Enter username'}
					name={'username'}
					disabled={isLoading}
					label={'Username'}
				/>

				<Button type={'submit'} disabled={!username}>
					Log in
				</Button>
			</form>
		</AuthLayout>
	);
};

export default LoginPage;
