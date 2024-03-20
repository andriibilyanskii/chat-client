import React from 'react';
import classNames from 'classnames';
import { Card } from '@mui/material';

import { Text } from 'components';

import { formatDate, useAppContext } from 'utils';
import { IMessage } from 'interfaces';

import styles from './MessageCard.module.scss';

interface IProps {
	message: IMessage;
}

const MessageCard: React.FC<IProps> = ({ message }, ref: any) => {
	const { userInfo } = useAppContext();

	return (
		<Card
			ref={ref}
			className={classNames({
				[styles.messageCard]: true,
				[styles.messageCard_my]: message?.usernameFrom === userInfo?.username,
			})}
		>
			<Text>{message?.text}</Text>
			<Text variant={'caption'} className={styles['messageCard-dateTime']}>
				{formatDate(message?.createdDate)}
			</Text>
		</Card>
	);
};

export const MessageCardRef = React.forwardRef<any, IProps>(MessageCard as any);

export default MessageCardRef;
