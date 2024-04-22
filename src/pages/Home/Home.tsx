import { useEffect, useState } from 'react';
import { sendMsg } from '../../helpers/sendMsg';
import './home.css';

const initialForm = {
	user: '',
	email: '',
	msg: '',
	status: 'stand',
};

const appStates = {
	stand: 'stand',
	sending: 'sending',
	sended: 'sended',
};

export const Home = () => {
	const [form, setForm] = useState(initialForm);
	const { user, email, msg, status } = form;

	useEffect(() => {
		if (status === appStates.sending) {
			const data = async () => {
				const dat = await sendMsg(form);

				if (dat.ok) setForm({ ...form, status: appStates.sended });
			};

			data();
		}
	}, [form.status]);

	const handleChangeForm = ({ target }: any) => {
		const { value, name } = target;

		const newState: any = { ...form };

		newState[name] = value;
		setForm(newState);
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();

		setForm({ ...form, status: appStates.sending });
	};

	return (
		<div className="container">
			{/* main */}
			<main>
				<div className="content">
					<div className="presentation">
						<div className="presentation__img"></div>

						<div className="presentation__text-section">
							<h1 className="presentation__name">Hi, my Name is Luis Vera</h1>
							<h2 className="presentation__subtitle">
								I'm Full Stack Developer
							</h2>
							<p className="presentation__description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nostrum, tempora illo. Delectus odio laborum quaerat saepe
								voluptur!
							</p>
						</div>

						<a className="presentation__link" href="/#contactme">
							Conctat me!
						</a>

						<div className="icons__section">
							<a href="https://github.com/LuisVera1" id="icon-git">
								<img
									className="icons__img"
									src="./github.svg"
									height="50"
									alt="Github"
								/>
							</a>
							<a href="https://www.linkedin.com/in/luisverag">
								<img
									className="icons__img"
									src="./linkedin.svg"
									height="50"
									alt="LinkedIn"
								/>
							</a>
							<a href="https://www.frontendmentor.io/profile/LuisVera1">
								<img
									className="icons__img"
									src="./fem.svg"
									height="50"
									alt="Frontend Mentor"
								/>
							</a>
						</div>
					</div>
				</div>
			</main>

			{/* contact */}
			<section
				id="contactme"
				className="contact-section"
				onSubmit={handleSubmit}
			>
				<div className="content">
					<div className="form-area">
						<h3 className="contact__title">Contact Me!</h3>

						<form className="form">
							<div className="input-area">
								<label htmlFor="">Name:</label>
								<input
									type="text"
									value={user}
									name="user"
									onChange={handleChangeForm}
								/>
							</div>

							<div className="input-area">
								<label htmlFor="">e-mail:</label>
								<input
									type="text"
									value={email}
									name="email"
									onChange={handleChangeForm}
								/>
							</div>

							<div className="input-area">
								<label htmlFor="">Message:</label>
								<textarea
									name="msg"
									id=""
									cols={50}
									rows={10}
									value={msg}
									onChange={handleChangeForm}
								></textarea>
							</div>
							{status == appStates.sended && <p>Sended Message</p>}

							<button onClick={handleSubmit}>Send</button>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};
