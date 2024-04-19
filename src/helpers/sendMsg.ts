export const sendMsg = async (form: any) => {
	const { user, email, msg } = form;

	const p1 = `Name: ${user}`;
	const p2 = `e-mail: ${email}`;
	const p3 = `Message: ${msg}`;

	const body = `${p1}\n${p2}\n${p3} `;

	const data = await fetch(import.meta.env.VITE_URL, {
		method: 'POST',
		headers: {
			accept: 'application/json',
			'content-type': 'application/json',
		},
		body: JSON.stringify({
			text: body,
			chat_id: import.meta.env.VITE_ID,
		}),
	});

	const info = await data.json();

	return info;
};
