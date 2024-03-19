function formatDate(
	dateString: string | undefined,
	params?: {
		onlyHours?: boolean;
		onlyDate?: boolean;
	}
) {
	if (!dateString) {
		return dateString;
	}

	if (params?.onlyHours) {
		return new Date(dateString).toLocaleString('uk-UA', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		});
	} else if (params?.onlyDate) {
		return new Date(dateString).toLocaleString('uk-UA', {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
		});
	} else {
		return new Date(dateString).toLocaleString('uk-UA', {
			day: 'numeric',
			month: 'numeric',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		});
	}
}

export { formatDate };
