import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Text, AuthLayout, Link, Button, Icon, Input, AnimateHeight } from 'components';
import { CONSTANTS } from '../../constants';

import { fetchData, useAppContext } from 'utils';

import styles from './ChatPage.module.scss';

const ChatPage: React.FC = () => {
	const [username, setUsername] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const { setUserInfo } = useAppContext();

	const history = useNavigate();

	return <div className={styles.chatPage}>Chat</div>;
};

export default ChatPage;
