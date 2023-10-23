const fetchFloridamanData = async (fetch: any, day: number, month: number) => {
	const base_url = '/api/floridaman';
	const response = await fetch(`${base_url}?day=${day}&month=${month}`);
	const json = await response.json();
	return json[0];
};

const fetchNumberApiData = async (fetch: any, endpoint: string, day: number, month: number) => {
	const base_url = 'http://numbersapi.com';
	let url = '';

	switch (endpoint) {
		case 'date':
			url = `${base_url}/${month}/${day}/date`;
			break;
		case 'day':
			url = `${base_url}/${day}`;
			break;
		case 'month':
			url = day === month ? `${base_url}/${month}/math` : `${base_url}/${month}`;
			break;
		default:
			throw new Error(`Invalid endpoint: ${endpoint}`);
	}

	const response = await fetch(url);
	const text = await response.text();

	return text;
};

export const load = async ({ fetch, cookies }) => {
	const dateCookie = cookies.get('date');
	let day = 0;
	let month = 0;

	if (dateCookie) {
		const date = dateCookie.split('/');
		day = parseInt(date[0]);
		month = parseInt(date[1]);
	} else {
		return {
			day,
			month,
			floridaman: {
				day: 0,
				month: 0,
				data: []
			},
			dateTrivia: '',
			dayTrivia: '',
			monthTrivia: ''
		};
	}

	return {
		day,
		month,
		floridaman: await fetchFloridamanData(fetch, day, month),
		dateTrivia: await fetchNumberApiData(fetch, 'date', day, month),
		dayTrivia: await fetchNumberApiData(fetch, 'day', day, month),
		monthTrivia: await fetchNumberApiData(fetch, 'month', day, month)
	};
};
