import React from 'react';
import classNames from 'classnames';

import styles from './Text.module.scss';

interface IProps {
	type: 'b1' | 'b2' | 'header';
	fontWeight?: 'regular' | 'medium' | 'bold';
	className?: string;
	children: React.ReactNode;
}

const Text: React.FC<IProps> = (props) => {
	const { type, className, fontWeight = 'regular', children, ...rest } = props;

	return React.createElement(
		type === 'header' ? 'h2' : 'p',
		{
			className: classNames({
				[styles.text]: true,
				[styles[`text_${type}`]]: true,
				[styles[`text-weight_${fontWeight}`]]: type !== 'header',
				[className || '']: className,
			}),
			...rest,
		},
		children
	);
};

export default Text;
