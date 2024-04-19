import { useEffect, useState } from 'react';
import './hero.css';

const strings = ['Soy Full Stack Developer', 'Soy Diseñador Gráfico'];

type TyperState = {
	typing: string;
	item: number;
	char: number;
};

const initialState: TyperState = {
	typing: '',
	item: 0,
	char: 0,
};

export const Hero = () => {
	const [typer, setTyper] = useState(initialState);
	const { item, char, typing } = typer;

	useEffect(() => {
		const lengthStrings = strings.length;
		const lengthCurrentString = strings[item].length;

		setTimeout(() => {
			const newState: TyperState = { ...typer };

			//typing
			if (lengthCurrentString > char) {
				newState.typing = typing + strings[item][char];
				newState.char = char + 1;
				setTyper(newState);
			}

			//set new string
			// item + 2: add 1 to new item, and 1 due the index position
			if (lengthCurrentString === char && lengthStrings >= item + 2) {
				setTimeout(() => {
					const newItem: number = item + 1;
					const newChar: number = 0;

					newState.typing = strings[newItem][newChar];
					newState.char = newChar + 1;
					newState.item = newItem;
					setTyper(newState);
				}, 2000);
			}

			//start again
			if (lengthCurrentString === char && lengthStrings === item + 1) {
				setTimeout(() => {
					const newItem: number = 0;
					const newChar: number = 0;

					newState.typing = strings[newItem][newChar];
					newState.item = newItem;
					newState.char = newChar + 1;
					setTyper(newState);
				}, 2000);
			}
		}, 150);
	}, [typer]);

	return (
		<>
			<main>
				<div className="hero__section">
					<div className="hero__image-section">
						<img
							className="hero__image"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuGFjsxZCvbMuKnsJHFywAKXzJh6SsPWVsifY_z36wVT9p38WQ3IQPDPDjhFPDyxv6YQY&usqp=CAU"
							alt="Luis Vera"
						/>
					</div>

					<div className="hero__text-section">
						<h1>Hola, mi nombre es Luis Vera 👍🏻</h1>
						<h2>{`${typing}|`}</h2>
						<p>
							Full Stack Developer enfocado en diseño responsivo, performance y
							atención al detalle. <br />
							Siempre busco aprender cosas nuevas y encontrar soluciones.
						</p>
						<button>Contact me</button>
					</div>
				</div>
			</main>
		</>
	);
};
