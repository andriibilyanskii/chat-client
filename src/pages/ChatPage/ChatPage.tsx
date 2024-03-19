import React, { useEffect } from 'react';

import { Users, ChatForm, ChatMessages } from 'components';

import { fetchData, useAppContext } from 'utils';

import { addMessage, setUsers } from '../../store/data-reducer';
import { useAppDispatch, useAppSelector } from '../../store/redux-hooks';

import styles from './ChatPage.module.scss';
import { useParams } from 'react-router-dom';
import { IMessage, IUserInfo } from '../../interfaces';
import { SELECTORS } from '../../store/selectors';

const ChatPage: React.FC = () => {
	const { userInfo, socket } = useAppContext();
	const { receiverUsername } = useParams();
	const users: IUserInfo[] = useAppSelector(SELECTORS.getChatStore)?.users;

	const dispatch = useAppDispatch();

	useEffect(() => {
		let isConnected = false;

		const interval = setInterval(() => {
			if (userInfo?.username && socket.id) {
				isConnected = true;
				socket.emit('newUser', { username: userInfo?.username, socketID: socket.id });

				clearInterval(interval);
			}
		}, 500);

		return () => {
			clearInterval(interval);
		};
	}, [userInfo?.username, socket.id]);

	useEffect(() => {
		let ignore = false;

		socket.on('messageResponse', (data: IMessage) => {
			if (
				!ignore &&
				((data?.usernameFrom === userInfo?.username &&
					data?.usernameTo === receiverUsername) ||
					(data?.usernameFrom === receiverUsername &&
						data?.usernameTo === userInfo?.username))
			) {
				dispatch(addMessage(data));
				console.log({ data });
			}
		});

		return () => {
			ignore = true;
		};
	}, [socket, userInfo?.username, receiverUsername]);

	useEffect(() => {
		socket.on('newUserResponse', (data: any) => dispatch(setUsers(data)));
	}, [socket]);

	useEffect(() => {
		socket.on('onConnect', (data: any) => dispatch(setUsers(data)));
	}, [socket]);

	useEffect(() => {
		if (receiverUsername && users?.find((u) => u?.username === receiverUsername)) {
			// do it with socket
			// fetchData('/messages/'+receiverUsername, true, {
			// 	method:'GET'
			// })?.then(e=>console.log(e))
		}
	}, [receiverUsername, users]);

	return (
		<div className={styles.chatPage}>
			<Users className={styles['chatPage-usersArea']} />
			<ChatMessages className={styles['chatPage-messagesArea']} />
			<ChatForm className={styles['chatPage-formArea']} />
		</div>
	);
};

export default ChatPage;
