
import { BrowserRouter, Route, Routes } from "react-router"



import AddNewTrade from "./pages/AddNewTrade"
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Statics"
import Trades from "./pages/Trades"

function App() {

	return (
			<BrowserRouter>
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
