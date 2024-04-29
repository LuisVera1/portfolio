export const sendMsg = async (form: any) => {
	const { user, email, msg } = form;

	const data = await fetch('https://portfolio-backend-henna-nu.vercel.app', {
		method: 'POST',
		headers: {
			accept: 'application/json',
			'content-type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
		mode: 'cors',
		body: JSON.stringify({
			name: user,
			email,
			message: msg,
		}),
	});

	const info = await data.json();

	return info;
};
