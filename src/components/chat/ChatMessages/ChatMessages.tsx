import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';

import { MessageCard, Text } from 'components';
import { IMessage } from 'interfaces';

import { useAppSelector } from 'store/redux-hooks';
import { SELECTORS } from 'store/selectors';

import styles from './ChatMessages.module.scss';

interface IProps {
	className?: string;
}

const ChatPage: React.FC<IProps> = ({ className = '' }) => {
	const messages: IMessage[] = useAppSelector(SELECTORS.getChatStore)?.messages;
	const { receiverUsername } = useParams();

	const ref = useRef<any>(null);

	useEffect(() => {
		ref.current?.scrollIntoView();
	}, [messages]);

	return (
		<div
			className={classNames({
				[styles['chatMessages']]: true,
				[styles['chatMessages_empty']]: messages?.length === 0 || !receiverUsername,
				[className]: className,
			})}
		>
			{receiverUsername &&
				messages?.length > 0 &&
				messages?.map((message, index) => (
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

			{(messages?.length === 0 || !receiverUsername) && (
				<Text variant={'h5'}>
					{!receiverUsername ? 'Select chat' : 'Write something...'}
				</Text>
			)}
		</div>
	);
};

export default ChatPage;
