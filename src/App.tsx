import './App.css';
import { Hero, Navbar } from './components';

function App() {
	return (
		<div className="container">
			{/* header */}
			<Navbar />

			{/* main */}
			<Hero />

			<section>Hello</section>
		</div>
	);
}

export default App;
