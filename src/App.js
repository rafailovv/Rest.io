import React from "react";
import "./css/normalize.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

class App extends React.Component {
	render() {
		return (
			<>
				<Header />
				<MainPage />
			</>
		);
	}
}

export default App;
