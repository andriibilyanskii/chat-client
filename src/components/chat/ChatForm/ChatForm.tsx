import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

import { Text, AuthLayout, Link, Button, Icon, Input, AnimateHeight, Users } from 'components';

import { fetchData, useAppContext } from 'utils';

import styles from './ChatForm.module.scss';
import {IMessage} from "../../../interfaces";

const ChatPage: React.FC = () => {
	const [text, setText] = useState('');
	const { userInfo, socket } = useAppContext();

	const sendMessage = (e: FormEvent<HTMLFormElement>) => {
		e?.preventDefault();

		if (text) {
			const message:IMessage ={
				text: text,
				usernameFrom: userInfo.username,
				usernameTo: 'selectedChatUsername',
				id: `${socket.id}${Math.random()}`,
				socketID: socket.id,
				createdDate: new Date().toISOString()
			}

			socket.emit('message', message);

			setText('');
		}

	}

	return (
		<form
			className={styles.chatForm}
			onSubmit={sendMessage}
		>
			<Input
				value={text}
				onChange={setText}
				placeholder={'Enter message'}
				autoFocus={true}
				required={true}
			/>
			<Button type={'submit'} className={styles['chatForm-sendButton']}>
				Send
			</Button>
		</form>
	);
};

export default ChatPage;
