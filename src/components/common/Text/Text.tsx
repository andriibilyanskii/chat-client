import React from 'react';
import { Typography } from '@mui/material';

interface IProps {
	variant: 'h4' | 'subtitle1';
	children: React.ReactNode;
}

const Text: React.FC<IProps> = (props) => {
	const { variant = 'subtitle1', children } = props;

	return <Typography variant={variant}>{children}</Typography>;
};

export default Text;
