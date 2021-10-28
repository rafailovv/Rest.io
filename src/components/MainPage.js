import React from "react";
import "../css/MainPage.css";

class MainPage extends React.Component {
	render() {
		return (
			<>
				<div className="preview">
					<div className="preview-info">
						<h1>Ищете, где отдохнуть во Владикавказе?</h1>
						<h3>Мы можем помочь вам с выбором!</h3>
					</div>
				</div>
				<div className="advantages">
					<h2>Преимущества отдыха у нас</h2>
					<div className="advantages-cards">
						<div className="advantage-card">
							<i className="fas fa-book"></i>
							<p className="card-title">История</p>
							<p className="card-subtitle">Окунитесь в завораживающие сказания нартского эпоса. Многие старожилы города верят в эти мифы и рассказывают их своим младшим поколение за поколением.</p>
						</div>
						<div className="advantage-card">
							<i className="fas fa-mountain"></i>
							<p className="card-title">Природа</p>
							<p className="card-subtitle">Величественные, укрытые снегами горные вершины, глубокие ущелья, окружённые отвесными скалами, стремительные реки и поражающие взгляд водопады – все это природные богатства Северной Осетии.</p>
						</div>
						<div className="advantage-card">
							<i className="fas fa-cloud"></i>
							<p className="card-title">Климат</p>
							<p className="card-subtitle">Климат Осетии очень благоприятный для туризма и активного отдыха, а чистый воздух позволяет вдохнуть полной грудью и расслабиться по-полной.</p>
						</div>
					</div>
				</div>
				<div className="people">
					<h2>Кому и где отдохнуть?</h2>
					<div className="people-grid">
						<div className="people-grid-row">
							<img className="people-grid-item" src="/family.jpg" alt="Семья"/>
							<div className="people-grid-item">
								<p>Влюбленные пары могут прогуляться по чудесному вечернему проспекту Мира или пройтись по "мосту Сердец" под журчание реки Терек. Романтика да и только!</p>
							</div>
							<img className="people-grid-item" src="/oldmans.jpg" alt="Пожилые люди"/>
						</div>
						<div className="people-grid-row">
							<div className="people-grid-item">
								<p>Семьи с детьми могут покататься на аттракционах в парке. Отдых как для детей, так и для взрослых!</p>
							</div>
							<img className="people-grid-item" src="/pair.jpg" alt="Влюбленная пара"/>
							<div className="people-grid-item">
								<p>Пожилые люди могут приехать в дендрарий и насладиться тихиной и блаженностью природы Осетии!</p>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="culture"></div> */}
				{/* <div className="kitchen"></div> */}
			</>
		);
	}
}

export default MainPage;
