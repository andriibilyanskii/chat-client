import React, { CSSProperties } from 'react';
import classNames from 'classnames';

import styles from './Icon.module.scss';

interface IProps {
	src: string;
	color?: string;
	size?:
		| '0.75rem'
		| '15px'
		| '1rem'
		| '1.25rem'
		| '1.5rem'
		| '2rem'
		| '2.25rem'
		| '2.5rem'
		| '4rem'
		| '8rem'
		| '11rem'
		| '12rem';
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	padding?: string;
	style?: CSSProperties;
	isColorful?: boolean;
}

const Icon: React.FC<IProps> = (props) => {
	const { src, color, size, padding, className, style, isColorful, ...rest } = props;

	if (isColorful) {
		return (
			<img
				src={src}
				className={classNames({
					[styles.icon]: true,
					[styles.icon_colorful]: true,
					[className || '']: Boolean(className),
				})}
				style={{
					width: size || '',
					cursor: props?.onClick ? 'pointer' : 'initial',
					padding,
					...style,
				}}
				{...rest}
			/>
		);
	}

	return (
		<div
			className={classNames({
				[styles.icon]: true,
				[className || '']: Boolean(className),
			})}
			style={{
				mask: `url(${src}) no-repeat center / contain`,
				WebkitMask: `url(${src}) no-repeat center / contain`,
				backgroundColor: color || '',
				width: size || '',
				height: size || '',
				cursor: props?.onClick ? 'pointer' : 'initial',
				padding,
				...style,
			}}
			{...rest}
		/>
	);
};

export default Icon;
