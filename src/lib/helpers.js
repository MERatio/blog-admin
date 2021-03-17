async function getData(url = '') {
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${localStorage.getItem('jwt')}`,
		},
	});
	return response.json();
}

async function uploadData(method, url = '', data = {}) {
	const response = await fetch(url, {
		method,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('jwt')}`,
		},
		body: JSON.stringify(data),
	});
	return response.json();
}

function handleExpressErr(err) {
	window.flashes([{ msg: err.message }]);
}

export { getData, uploadData, handleExpressErr };
