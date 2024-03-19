import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

import { Text, AuthLayout, Link, Button, Icon, Input, AnimateHeight, Users } from 'components';

import { fetchData, useAppContext } from 'utils';

import styles from './ChatForm.module.scss';

const userName = Date.now();

const ChatPage: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { userInfo, socket, receiverUsername } = useAppContext();

	const lastMessageRef = useRef<any>(null);

	// useEffect(() => {
	// 	lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
	// }, [messages]);

	return (
		<div className={styles.chatForm}>
			<Button
			onClick={() => {
					socket.emit('message', {
						text: Date.now() + 'text',
						usernameFrom: userInfo.username,
						usernameTo: 'selectedChatUsername',
						id: `${socket.id}${Math.random()}`,
						socketID: socket.id,
					});
				}}
			className={styles['chatForm-sendButton']}
			>
				Click
			</Button>
		</div>
	);
};

export default ChatPage;
