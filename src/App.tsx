import { Route, Routes } from 'react-router-dom';
import { Dev } from './pages/Dev/Dev';
import { Home } from './pages/Home/Home';

function App() {
	return (
		<>
			<Routes>
				<Route path="/dev" element={<Dev />} />

				<Route path="*" element={<Home />} />

			</Routes>
		</>
	);
}

export default App;
