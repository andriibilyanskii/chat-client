import React from 'react';

import { Text, Icon } from 'components/index';
import { CONSTANTS } from '../../../constants';

import styles from './AuthLayout.module.scss';

interface IProps {
	children: React.ReactNode;
	title: string;
}

const AuthLayout: React.FC<IProps> = ({ children, title }) => {
	return (
		<main className={styles['authLayout']}>
			<Text type={'header'} className={styles['authLayout-title']}>
				{title}
			</Text>
			<div className={styles.content}>{children}</div>
		</main>
	);
};

export default AuthLayout;
