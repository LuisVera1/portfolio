import { useEffect, useState } from 'react';
import { sendMsg } from '../../helpers/sendMsg';
import './home.css';
import { validateForm } from '../../helpers/validateForm';

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

		if (form.status === appStates.stand) {
			const dataToSend = {
				...form,
				user: validateForm({ name: 'name', value: user }),
				email: validateForm({ name: 'email', value: email }),
				msg: validateForm({ name: 'msg', value: msg }),
				status: appStates.sending,
			};

			if (
				dataToSend.user.length > 2 &&
				dataToSend.email.length > 5 &&
				dataToSend.msg.length > 5
			) {
				setForm(dataToSend);
			}
		}
	};

	return (
		<div className="container">
			{/* main */}
			<main>
				<div className="content">
					<div className="presentation">
						<div className="presentation__img-section">
						<img className='presentation__img' loading="lazy" width="200" height="200" src="https://res.cloudinary.com/dsssuigym/image/upload/v1714417149/Projects/mrbsut2aqmysei0hmkez.webp" alt="Luis Vera" />
						</div>

						<div className="presentation__text-section">
							<h1 className="presentation__name">Hi, I'm Luis Vera!</h1>
							<h2 className="presentation__subtitle">
								<span>{'< '}</span>Full Stack Developer<span>{' />'}</span>
							</h2>
							<p className="presentation__description">
								Passionate about technology, programming, and web development,
								I've been immersed in a self-learning routine for 2+ years,
								constantly seeking to acquire new skills.
								<br />
								My focus is on user experience, performance, and accessibility.
							</p>
						</div>

						<a className="presentation__link" href="/#contactme">
							Conctact me!
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
			<section id="contactme" className="contact-section">
				<div className="content">
					<div className="form-area">
						<h3 className="contact__title">Contact Me!</h3>

						<form className="form" onSubmit={handleSubmit}>
							<div className="input-area">
								<label className="form__label" htmlFor="user">
									Name:
								</label>
								<input
									className="form__input"
									aria-label='Name'
									type="text"
									value={user}
									name="user"
									onChange={handleChangeForm}
								/>
							</div>

							<div className="input-area">
								<label className="form__label" htmlFor="email">
									e-mail:
								</label>
								<input
									className="form__input"
									aria-label='Email'
									type="text"
									value={email}
									name="email"
									onChange={handleChangeForm}
								/>
							</div>

							<div className="input-area">
								<label className="form__label" htmlFor="msg">
									Message:
								</label>
								<textarea
									className="form__textarea"
									aria-label='Message'
									name="msg"
									id=""
									// cols={50}
									rows={5}
									value={msg}
									onChange={handleChangeForm}
								></textarea>
							</div>
							{status == appStates.sended && (
								<p className="form__msg-status--ok">Sended Message</p>
							)}

							<button
								className="form__submit"
								onClick={handleSubmit}
								aria-label='Send form'
								disabled={form.status == appStates.sending}
							>
								Send
							</button>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};
