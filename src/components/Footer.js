import React from "react";
import "../css/Footer.css";

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<ul className="footer-menu">
                    <li><a className="footer-menu-item-link" href="/">Главная</a></li>
                    <li><a className="footer-menu-item-link" href="/">Культура</a></li>
                    <li><a className="footer-menu-item-link" href="/">Рестораны</a></li>
                    <li><a className="footer-menu-item-link" href="/">Кафе</a></li>
                    <li><a className="footer-menu-item-link" href="/">Кинотеатры</a></li>
                    <li>Тех. поддержка: <a className="footer-menu-item-link" href="tel:+71234567890">+7 123-456-78-90</a></li>
                </ul>
			</footer>
		);
	}
}

export default Footer;
