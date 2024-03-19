import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../index';

import styles from './PageLayout.module.scss';

const PageLayout: React.FC = () => {
	return (
		<main className={styles['pageLayout']}>
			<Header />
			<Outlet />
		</main>
	);
};

export default PageLayout;
