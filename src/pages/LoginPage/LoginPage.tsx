import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Text, AuthLayout, Link, Button, Icon, Input, AnimateHeight } from 'components';
import { CONSTANTS } from '../../constants';

import { fetchData, useAppContext } from 'utils';

import styles from './LoginPage.module.scss';

const LoginPage: React.FC = () => {
	const [username, setUsername] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const { setUserInfo } = useAppContext();

	const history = useNavigate();

	return (
		<AuthLayout title={'Log in to your account'}>
			<form
				onSubmit={async (e: FormEvent<HTMLFormElement>) => {
					e?.preventDefault();

					const response = await fetchData(
						'/auth/login',
						true,
						{
							body: {
								username,
							},
						},
						{
							setIsLoading,
						}
					);

					if (response?.token) {
						setUserInfo(response);
						localStorage.setItem('user', JSON.stringify(response));
						history('/');
					}
				}}
			>
				<Input
					value={username}
					onChange={setUsername}
					placeholder={'Enter username'}
					name={'username'}
					disabled={isLoading}
					autofocus={true}
				/>

				<Button type={'submit'} disabled={!username}>
					Log in
				</Button>
			</form>
		</AuthLayout>
	);
};

export default LoginPage;
