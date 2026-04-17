
import { BrowserRouter, Route, Routes } from "react-router"



import AddNewTrade from "./pages/AddNewTrade"
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Statics"
import Trades from "./pages/Trades"

import Navbar from "./components/Navbar"

function App() {

	return (
			<BrowserRouter>
			<Navbar/>
				<Routes>
					<Route path="/addtrade" element={<AddNewTrade />} />
					<Route path="/" element={<Dashboard />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/alltrades" element={<Trades />} />
				</Routes>
			</BrowserRouter>
	)
}

export default App
