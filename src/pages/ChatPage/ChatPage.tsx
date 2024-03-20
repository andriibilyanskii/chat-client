import React, { useEffect } from 'react';

import { Users, ChatForm, ChatMessages } from 'components';

import { fetchData, useAppContext } from 'utils';

import { addMessage, setMessages, setUsers } from '../../store/data-reducer';
import { useAppDispatch, useAppSelector } from '../../store/redux-hooks';

import styles from './ChatPage.module.scss';
import { useParams } from 'react-router-dom';
import { IMessage, IUserInfo } from '../../interfaces';
import { SELECTORS } from '../../store/selectors';
import classNames from "classnames";

const ChatPage: React.FC = () => {
	const { userInfo, socket, setShowLoader } = useAppContext();
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
				console.log(data);
				dispatch(addMessage(data));
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
		let ignore = false;

		if (userInfo?.username && receiverUsername) {
			fetchData(
				'/messages/' + userInfo?.username + '/' + receiverUsername,
				true,
				{
					method: 'GET',
				},
				{
					setIsLoading: setShowLoader,
				}
			)?.then(({ messages }) => {
				if (!ignore) {
					dispatch(setMessages(messages));
				}
			});
		}

		return () => {
			ignore = true;
		};
	}, [receiverUsername, userInfo?.username]);

	return (
		<div className={classNames({
			[styles.chatPage]:true,
			[styles.chatPage_showChat]:receiverUsername,
			[styles.chatPage_showUsers]:!receiverUsername,
		})}>
			<Users className={styles['chatPage-usersArea']} />
			<ChatMessages className={styles['chatPage-messagesArea']} />
			<ChatForm className={styles['chatPage-formArea']} />
		</div>
	);
};

export default ChatPage;
