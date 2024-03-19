import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthLayout, Button, Input } from 'components';
import { useAppContext } from 'utils';

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
					setUserInfo({ username, socketID: socket.id, isOnline: true });
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
