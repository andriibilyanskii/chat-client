import React from 'react';

import { Text } from 'components/index';

import styles from './Users.module.scss';
import {IUserInfo} from "../../../interfaces";
import {useAppSelector} from "../../../store/redux-hooks";
import {SELECTORS} from "../../../store/selectors";


const Users: React.FC = () => {
	const users: IUserInfo[] = useAppSelector(SELECTORS.getChatStore)?.users

	return (
		<div className={styles['users']}>

		</div>
	);
};

export default Users;
