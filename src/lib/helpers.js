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

async function putPostPublished(post) {
	try {
		const data = await uploadData(
			'PUT',
			`${process.env.REACT_APP_API_URL}/posts/${post._id}`,
			{ ...post, published: !post.published }
		);
		if (data.err) {
			handleExpressErr(data.err);
		} else if (data.errors) {
			window.flashes(data.errors);
		} else {
			return data.post;
		}
	} catch (err) {
		window.flashes([{ msg: 'Something went wrong, please try again later.' }]);
	}
}

async function deletePostComment(postId, postCommentId) {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/posts/${postId}/comments/${postCommentId}`,
			{
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('jwt')}`,
				},
			}
		);
		const data = await response.json();
		if (data.err) {
			handleExpressErr(data.err);
		} else {
			return data.comment;
		}
	} catch (err) {
		window.flashes([{ msg: 'Something went wrong, please try again later.' }]);
	}
}

function handleExpressErr(err) {
	window.flashes([{ msg: err.message }]);
}

export {
	getData,
	uploadData,
	putPostPublished,
	deletePostComment,
	handleExpressErr,
};
