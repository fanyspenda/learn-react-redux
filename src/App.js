import "./App.css";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

import { globalStore } from "./redux/store";
import Headers from "./components/headers";

function App() {
	const [count, setCount] = useState(0);

	return (
		<Provider store={globalStore}>
			<Headers />
		</Provider>
	);
}

export default App;
