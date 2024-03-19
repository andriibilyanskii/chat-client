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
	MessageCard,
} from 'components';

import { fetchData, useAppContext } from 'utils';

import styles from './ChatMessages.module.scss';
import { IMessage } from '../../../interfaces';
import { useAppSelector } from '../../../store/redux-hooks';
import { SELECTORS } from '../../../store/selectors';

const ChatPage: React.FC = () => {
	const messages: IMessage[] = useAppSelector(SELECTORS.getChatStore)?.messages;

	console.log(messages);

	const ref = useRef<any>(null);

	useEffect(() => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	return (
		<div className={styles.chatMessages}>
			{messages?.map((message, index) => (
				<MessageCard
					{...(index === messages?.length - 1
						? {
								ref: ref,
							}
						: {})}
					key={message?.id}
					message={message}
				/>
			))}
		</div>
	);
};

export default ChatPage;
