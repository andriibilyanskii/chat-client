import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

import { MessageCard } from 'components';

import { fetchData, useAppContext } from 'utils';

import styles from './ChatMessages.module.scss';
import { IMessage } from '../../../interfaces';
import { useAppSelector } from '../../../store/redux-hooks';
import { SELECTORS } from '../../../store/selectors';
import classNames from 'classnames';

interface IProps {
	className?: string;
}

const ChatPage: React.FC<IProps> = ({ className = '' }) => {
	const messages: IMessage[] = useAppSelector(SELECTORS.getChatStore)?.messages;

	const ref = useRef<any>(null);

	useEffect(() => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	return (
		<div
			className={classNames({
				[styles['chatMessages']]: true,
				[className]: className,
			})}
		>
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
