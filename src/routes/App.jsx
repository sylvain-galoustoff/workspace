import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "../components/header/Header"
import Toaster from "../components/toasts/Toaster"
import RemindMe from "./remindme/RemindMe"
import ContactMe from "./contactme/ContactMe"

function App() {
	return (
		<div id="app">
			<Router>

				<Header />

				<Routes>
					<Route path="/" element={<RemindMe />} />
					<Route path="/contactme" element={<ContactMe />} />
				</Routes>

				<Toaster />

			</Router>
		</div>
	)
}

export default App
