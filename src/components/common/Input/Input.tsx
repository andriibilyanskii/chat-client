import React from 'react';

import { TextField } from '@mui/material';

interface IProps {
	value: string;
	onChange: (e: string) => void;
	placeholder?: string;
	label?: string;
	type?: 'text' | 'email' | 'password';
	name?: string;
	disabled?: boolean;
	autoFocus?: boolean;
	required?: boolean;
}

const Input: React.FC<IProps> = (props) => {
	const { onChange, ...rest } = props;

	return (
		<TextField
			id='filled-basic'
			variant='filled'
			sx={{
				width: '100%',
			}}
			onChange={(e) => {
				onChange(e.target.value);
			}}
			{...rest}
		/>
	);
};

export default Input;
