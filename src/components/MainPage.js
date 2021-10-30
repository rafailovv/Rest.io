import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation, EffectFade } from 'swiper';
import "swiper/swiper-bundle.min.css";
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
							<img className="people-grid-item" src="/img/family.jpg" alt="Семья"/>
							<div className="people-grid-item">
								<p>Влюбленные пары могут прогуляться по вечернему проспекту Мира или "мосту Сердец". Романтика да и только!</p>
							</div>
							<img className="people-grid-item" src="/img/oldmans.jpg" alt="Пожилые люди"/>
						</div>
						<div className="people-grid-row">
							<div className="people-grid-item">
								<p>Семьи с детьми могут покататься на аттракционах в парке. Отдых как для детей, так и для взрослых!</p>
							</div>
							<img className="people-grid-item" src="/img/pair.jpg" alt="Влюбленная пара"/>
							<div className="people-grid-item">
								<p>Пожилые люди могут приехать в дендрарий и насладиться тихиной и блаженностью природы Осетии!</p>
							</div>
						</div>
					</div>
				</div>
				<div className="culture">
					<h2>Достопримечательности</h2>
					<Swiper
						modules={[Navigation, EffectFade]}
						loop={true}
						effect="fade"
						navigation
					>
						<SwiperSlide>
							<img src="/img/slide1.jpg" alt="Мужской монастырь"/>
						</SwiperSlide>
						<SwiperSlide>
							<img src="/img/slide2.jpg" alt="Проспект Мира"/>
						</SwiperSlide>
						<SwiperSlide>
							<img src="/img/slide3.jpg" alt="Суннитская мечеть"/>
						</SwiperSlide>
						<SwiperSlide>
							<img src="/img/slide4.jpg" alt="Мемориал славы"/>
						</SwiperSlide>
						<SwiperSlide>
							<img src="/img/slide5.jpg" alt="Памятник Петру Барбашову"/>
						</SwiperSlide>
						<SwiperSlide>
							<img src="/img/slide6.jpg" alt="Свято-Георгиевский собор"/>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="rest">
					<h2>Мы не дадим вам соскучиться!</h2>
					<h4>Владикавказ - чудесное место для отдыха! Памятники культуры, история и нартский эпос, кавказская кухня и, конечно же, местные люди. Чтобы вы не растерялись, сориентировались в городе и знали, где найти свое место отдыха, пользуйтесь нашим путеводителем!</h4>
					<button>Начать отдыхать!</button>
				</div>
			</>
		);
	}
}

export default MainPage;
