import React from 'react';
import { Typography } from '@mui/material';

interface IProps {
	variant?: 'h4' | 'subtitle1' | 'caption';
	children: React.ReactNode;
	className?: string;
}

const Text: React.FC<IProps> = (props) => {
	const { variant = 'subtitle1', children, ...rest } = props;

	return (
		<Typography variant={variant} {...rest}>
			{children}
		</Typography>
	);
};

export default Text;
