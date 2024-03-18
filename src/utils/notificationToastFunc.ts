import { toast } from 'react-toastify';

import { INotificationToast } from 'interfaces';

export const notificationToastFunc = (props: INotificationToast) => {
	const { type, text, ...rest } = props;

	const toastObj = {
		position: rest.position || 'top-right',
		autoClose: rest.autoClose || 1500,
		hideProgressBar: rest.hideProgressBar || false,
		closeOnClick: rest.closeOnClick || true,
		pauseOnHover: rest.pauseOnHover || true,
		draggable: rest.draggable || true,
		progress: rest.progress || undefined,
		theme: rest.theme || 'light',
	};

	let textToast = text;

	if (!text) {
		if (type === 'success') {
			textToast = 'The action was successfully completed';
		} else if (type === 'error') {
			textToast = 'Error';
		}
	}

	switch (type) {
		case 'success':
			toast.success(textToast, toastObj);
			break;
		case 'error':
			toast.error(textToast, { ...toastObj, autoClose: 60000 });
			break;
		case 'warn':
			toast.warn(textToast, { ...toastObj, autoClose: 25000 });
			break;
		case 'info':
			toast.info(textToast, { ...toastObj, autoClose: 25000 });
			break;
		case 'default':
			toast(textToast, { ...toastObj, autoClose: 25000 });
			break;
	}
};
