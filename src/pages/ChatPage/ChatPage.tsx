import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Text, AuthLayout, Link, Button, Icon, Input, AnimateHeight, WebSocket } from 'components';
import { CONSTANTS } from '../../constants';

import { fetchData, useAppContext } from 'utils';

import styles from './ChatPage.module.scss';

const userName = Date.now();

const ChatPage: React.FC = () => {
	const [selectedChatUsername, setSelectedChatUsername] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const { userInfo, socket } = useAppContext();

	const history = useNavigate();

	const [messages, setMessages] = useState<any[]>([]);
	const [usersOnline, setUsersOnline] = useState<any[]>([]);
	const [typingStatus, setTypingStatus] = useState('');
	const lastMessageRef = useRef<any>(null);

	useEffect(() => {
		if (userInfo?.username && socket.id) {
			socket.emit('newUser', { username: userInfo?.username, socketID: socket.id });
		}
	}, [socket.id, userInfo.username]);

	useEffect(() => {
		socket.on('messageResponse', (data: any) => setMessages([...messages, data]));
	}, [socket, messages]);

	useEffect(() => {
		socket.on('newUserResponse', (data: any) => setUsersOnline([...usersOnline, ...data]));
	}, [socket]);

	useEffect(() => {
		socket.on('onConnect', (data: any) => {
			console.log(data);
			setUsersOnline(data);
		});
	}, [socket]);

	useEffect(() => {
		lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	return (
		<div className={styles.chatPage}>
			{JSON.stringify(userInfo)}

			<Button
				onClick={() => {
					socket.emit('message', {
						text: Date.now() + 'text',
						usernameFrom: userInfo.username,
						usernameTo: selectedChatUsername,
						id: `${socket.id}${Math.random()}`,
						socketID: socket.id,
					});
				}}
			>
				Click
			</Button>
			<pre>{JSON.stringify(messages, null, 5)}</pre>
			<pre>{JSON.stringify(usersOnline, null, 5)}</pre>
		</div>
	);
};

export default ChatPage;
