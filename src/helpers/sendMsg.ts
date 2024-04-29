export const sendMsg = async (form: any) => {
	const { user, email, msg } = form;

	const data = await fetch(import.meta.env.VITE_URL, {
		method: 'POST',
		headers: {
			accept: 'application/json',
			'content-type': 'application/json',
			// 'Access-Control-Allow-Origin': '*',
		},
		mode: 'cors',
		body: JSON.stringify({
			user,
			email,
			msg,
		}),
	});

	const info = await data.json();

	return info;
};
