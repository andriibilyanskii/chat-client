import React from 'react';
import { CircularProgress } from '@mui/material';

import { useAppContext } from '../../../utils';

import styles from './Loader.module.scss';

const Loader: React.FC = () => {
	const { showLoader } = useAppContext();

	if (!showLoader) {
		return null;
	}

	return (
		<div className={styles.loader}>
			<CircularProgress size={100} />
		</div>
	);
};

export default Loader;
