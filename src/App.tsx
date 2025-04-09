import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Hovedside } from "./components/Hovedside";
import { LeggTilBevis } from "./components/LeggTilBevis";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Hovedside />} />
				<Route path="/nytt-bevis" element={<LeggTilBevis />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
