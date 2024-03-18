import React, { CSSProperties, useCallback, useState } from 'react';
import classNames from 'classnames';

import styles from './Input.module.scss';

interface IProps {
	value: string;
	onChange: (e: string) => void;
	placeholder?: string;
	className?: string;
	classNameContainer?: string;
	label?: string;
	style?: CSSProperties;
	labelStyle?: CSSProperties;
	maxLength?: number;
	type?: 'text' | 'email' | 'password';
	name?: string;
	disabled?: boolean;
}

const Input: React.FC<IProps> = (props) => {
	const { onChange, className, classNameContainer, labelStyle, label, ...rest } = props;

	return (
		<label
			className={classNames({
				[styles['input-container']]: true,
				[styles['input-container_withLabel']]: label,
				[classNameContainer || '']: !!classNameContainer,
			})}
			style={labelStyle}
		>
			{label && <p>{label}</p>}

			<input
				className={classNames({
					[styles.input]: true,
					[className || '']: Boolean(className),
				})}
				onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
					onChange(event?.target?.value);
				}}
				{...rest}
			/>
		</label>
	);
};

export default Input;
