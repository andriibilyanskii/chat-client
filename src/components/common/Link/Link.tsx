import React from 'react';
import classNames from 'classnames';
import { Link as ReactLink } from 'react-router-dom';

import styles from './Link.module.scss';

interface IProps {
	to: string;
	children: React.ReactNode;
	className?: string;
}

const Link: React.FC<IProps> = ({ to, children, className = '' }) => {
	return (
		<ReactLink
			to={to}
			className={classNames({
				[styles.link]: true,
				[className]: className,
			})}
		>
			{children}
		</ReactLink>
	);
};

export default Link;
