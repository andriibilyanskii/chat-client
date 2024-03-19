import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { default as ButtonMUI } from '@mui/material/Button';

import styles from './Button.module.scss';

interface IProps {
	children?: React.ReactNode;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	className?: string;
	type?: 'button' | 'submit';
	disabled?: boolean;
	style?: CSSProperties;
	variant?: 'contained' | 'text' | 'outlined';
}

const Button: React.FC<IProps> = (props) => {
	const { children, className, variant = 'contained', ...rest } = props;

	return (
		<ButtonMUI
			className={classNames({
				[styles.button]: true,
				[className || '']: Boolean(className),
			})}
			{...rest}
			variant={variant}
		>
			{children}
		</ButtonMUI>
	);
};

export default Button;
