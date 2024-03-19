import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

import { Text, AuthLayout, Link, Button, Icon, Input, AnimateHeight, Users } from 'components';

import { fetchData, useAppContext } from 'utils';

import styles from './ChatMessages.module.scss';
import {IMessage} from "../../../interfaces";
import {useAppSelector} from "../../../store/redux-hooks";
import {SELECTORS} from "../../../store/selectors";

const userName = Date.now();

const ChatPage: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { userInfo, socket, receiverUsername } = useAppContext();

	const messages: IMessage[] = useAppSelector(SELECTORS.getChatStore)?.messages;

	console.log(messages)

	const lastMessageRef = useRef<any>(null);

	// useEffect(() => {
	// 	lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
	// }, [messages]);

	return (
		<div className={styles.chatMessages}>
			<pre>{JSON.stringify(messages, null, 5)}</pre>
		</div>
	);
};

export default ChatPage;
