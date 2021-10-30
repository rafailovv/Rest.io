import React from "react";
import "./css/normalize.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import "./css/media.css";

class App extends React.Component {
	render() {
		return (
			<>
				<Header />
				<MainPage />
				<Footer />
			</>
		);
	}
}

export default App;
