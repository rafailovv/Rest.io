import React from "react";
import "../css/Header.css";

class Header extends React.Component {
	render() {
		return(
            <header className="header">
                <div className="container">
                    <img className="header-logo" src="/logo512.png" alt="logo" />
                    <ul className="header-menu">
                        <li><a className="header-menu-link" href="/">Главная</a></li>
                        <li><a className="header-menu-link" href="/">Рестораны</a></li>
                        <li><a className="header-menu-link" href="/">Кафе</a></li>
                        <li><a className="header-menu-link" href="/">Плей-бары</a></li>
                        <li><a className="header-menu-link" href="/">Кинотеатры</a></li>
                    </ul>
                </div>
            </header>
        );
	}
}

export default Header;
