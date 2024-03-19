import React, { LegacyRef, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@mui/material';

import { Text, AuthLayout, Link, Button, Icon, Input, AnimateHeight, Users } from 'components';

import { fetchData, formatDate, useAppContext } from 'utils';

import styles from './MessageCard.module.scss';
import { IMessage } from '../../../interfaces';
import { useAppSelector } from '../../../store/redux-hooks';
import { SELECTORS } from '../../../store/selectors';

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
