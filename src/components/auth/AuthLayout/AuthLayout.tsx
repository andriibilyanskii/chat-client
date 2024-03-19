import React from 'react';

import { Text } from 'components/index';

import styles from './AuthLayout.module.scss';

interface IProps {
	children: React.ReactNode;
	title: string;
}

const AuthLayout: React.FC<IProps> = ({ children, title }) => {
	return (
		<main className={styles['authLayout']}>
			<Text variant={'h4'}>{title}</Text>
			<div className={styles.content}>{children}</div>
		</main>
	);
};

export default AuthLayout;
