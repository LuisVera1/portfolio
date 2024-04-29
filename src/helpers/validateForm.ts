interface dataForm {
	name: string;
	value: string;
}

export const cleanText = (text: string): string => {
	return text
		.replaceAll('<', '')
		.replaceAll('>', '')
		.replaceAll('=', '')
		.replaceAll('/', '')
		.replaceAll('{', '')
		.replaceAll('}', '');
};

export const validateForm = (data: dataForm): string => {
	const { name, value } = data;

	const cleanValue = cleanText(value);

	//validate name
	if (name === 'name')  return cleanValue;

	//validate msg
	if (name === 'msg')  return cleanValue;

	//validate email
	const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (name === 'email' && cleanValue.match(regex)) {
		return cleanValue;
	}

	return '';
};
