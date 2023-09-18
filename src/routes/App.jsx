import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import RemindMe from "./remindme/RemindMe"
import Header from "../components/header/Header"
import Toaster from "../components/toasts/Toaster"
import SocialLinks from "../components/socialLinks/SocialLinks"

function App() {
	return (
		<div id="app">
			<Router>

				<Header />

				<Routes>
					<Route path="/" element={<RemindMe />} />
				</Routes>

				<Toaster />

				<SocialLinks />

			</Router>
		</div>
	)
}

export default App
