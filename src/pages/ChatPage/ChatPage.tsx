import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

import {
	Text,
	AuthLayout,
	Link,
	Button,
	Icon,
	Input,
	AnimateHeight,
	Users,
	ChatForm, ChatMessages,
} from 'components';
import { CONSTANTS } from '../../constants';

import { fetchData, useAppContext } from 'utils';

import styles from './ChatPage.module.scss';
import {addMessage, addUsers, setUsers} from "../../store/data-reducer";
import {useAppDispatch} from "../../store/redux-hooks";

const userName = Date.now();

const ChatPage: React.FC = () => {
	const [selectedChatUsername, setSelectedChatUsername] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const { userInfo, socket } = useAppContext();

	const history = useNavigate();

	const [typingStatus, setTypingStatus] = useState('');
	const lastMessageRef = useRef<any>(null);


	const dispatch = useAppDispatch()

	useEffect(() => {
		if (userInfo?.username && socket.id) {
			socket.emit('newUser', { username: userInfo?.username, socketID: socket.id });
		}
	}, [socket.id, userInfo.username]);

	useEffect(() => {
		socket.on('messageResponse', (data: any) => {
			dispatch(addMessage(data))

			console.log({data})
		});
	}, [socket]);

	useEffect(() => {
		socket.on('newUserResponse', (data: any) => dispatch(addUsers(data)));
	}, [socket]);

	useEffect(() => {
		socket.on('onConnect', (data: any) => dispatch(setUsers(data)));
	}, [socket]);

	// useEffect(() => {
	// 	lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
	// }, [messages]);

	return (
		<div className={styles.chatPage}>
			<ChatMessages/>
			<ChatForm />
		</div>
	);
};

export default ChatPage;
