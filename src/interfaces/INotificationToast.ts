interface INotificationToast {
	type: 'success' | 'error' | 'warn' | 'info' | 'default';
	text?: string;
	position?: 'top-right';
	autoClose?: number;
	hideProgressBar?: boolean;
	closeOnClick?: boolean;
	pauseOnHover?: boolean;
	draggable?: boolean;
	progress?: any;
	theme?: 'light';
}

export default INotificationToast;
