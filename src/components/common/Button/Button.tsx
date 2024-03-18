import React, { CSSProperties } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface IProps {
	children?: React.ReactNode;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	className?: string;
	type?: 'button' | 'submit';
	disabled?: boolean;
	style?: CSSProperties;
	buttonType?: 'default' | 'transparent_small' | 'transparent';
}

const Button: React.FC<IProps> = (props) => {
	const { children, className, buttonType = 'default', ...rest } = props;

	return (
		<button
			className={classNames({
				[styles.button]: true,
				[styles[`button_${buttonType}`]]: true,
				[className || '']: Boolean(className),
			})}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
