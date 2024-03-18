import axios from 'axios';

import { notificationToastFunc } from 'utils';
import { CONSTANTS } from '../constants';

async function fetchData<Type>(
	url: string,
	defaultAPI: boolean,
	params?: {
		method?: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
		body?: Type;
	},
	other?: {
		setIsLoading?: (e: boolean) => void;
		showSuccessMessage?: boolean;
	}
) {
	other?.setIsLoading?.(true);

	const _url = defaultAPI ? CONSTANTS.BACKEND_URL + url : url;

	return await axios({
		method: params?.method || 'post',
		url: _url,
		headers: { 'Content-Type': 'application/json' },
		...(params?.body
			? {
					data: params?.body,
				}
			: {}),
	})
		.then((res) => ({
			data: res.data,
			status: res?.status,
		}))
		.then(({ data, status }) => {
			if (status !== 200) {
				notificationToastFunc({
					type: 'error',
					text: data?.message,
				});
			}

			if (other?.showSuccessMessage) {
				notificationToastFunc({
					type: 'success',
				});
			}

			return data;
		})
		.catch((error) => {
			console.error(error);

			const detail = error.response.data.detail;
			const text =
				typeof detail === 'string'
					? detail
					: detail?.map((e: any) => Object.values(e)?.join(' '))?.join(' | ');

			notificationToastFunc({
				type: 'error',
				text: text,
			});

			return {
				status: error?.response?.status,
				statusText: text,
				detail,
			};
		})
		.finally(() => {
			other?.setIsLoading?.(false);
		});
}

export { fetchData };
