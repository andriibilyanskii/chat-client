import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { Button, Input } from 'components';
import { useAppContext } from 'utils';
import { IMessage } from 'interfaces';

import styles from './ChatForm.module.scss';

interface IProps {
	className?: string;
}

const ChatPage: React.FC<IProps> = ({ className = '' }) => {
	const [text, setText] = useState('');
	const { userInfo, socket } = useAppContext();
	const { receiverUsername } = useParams();

	useEffect(() => {
		setText('');
	}, [receiverUsername]);

	const sendMessage = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e?.preventDefault();

			if (text && receiverUsername) {
				const message: IMessage = {
					text: text,
					usernameFrom: userInfo.username,
					usernameTo: receiverUsername,
					id: `${socket.id}${Math.random()}`,
					socketID: socket.id,
					createdDate: new Date().toISOString(),
				};

				socket.emit('message', message);

				setText('');
			}
		},
		[text, receiverUsername, userInfo.username, socket]
	);

	if (!receiverUsername) {
		return null;
	}

	return (
		<form
			className={classNames({
				[styles['chatForm']]: true,
				[className]: className,
			})}
			onSubmit={sendMessage}
		>
			<Input
				value={text}
				onChange={setText}
				placeholder={'Enter message'}
				autoFocus={true}
				required={true}
				name={'text'}
			/>
			<Button type={'submit'} className={styles['chatForm-sendButton']}>
				Send
			</Button>
		</form>
	);
};

export default ChatPage;
