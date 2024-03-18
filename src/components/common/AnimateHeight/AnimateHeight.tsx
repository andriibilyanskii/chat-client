import React from 'react';
import classNames from 'classnames';
import { default as AnimateHeightReact } from 'react-animate-height';

import styles from './AnimateHeight.module.scss';

interface IProps {
	isOpen: boolean;
	children: React.ReactNode;
	className?: string;
}

const AnimateHeight: React.FC<IProps> = (props) => {
	const { isOpen, children, className = '' } = props;

	return (
		<AnimateHeightReact
			duration={250}
			height={isOpen ? 'auto' : 0}
			className={classNames({
				[styles.animateHeight]: true,
				[className || '']: !!className,
			})}
		>
			{children}
		</AnimateHeightReact>
	);
};

export default AnimateHeight;
