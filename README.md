# curly-coder.github.io
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap" rel="stylesheet">
	<!-- CSS -->
	<link rel="stylesheet" href="bootstrap.min.css">
	<link rel="stylesheet" href="main.css">
	<title>WOMAZING</title>
</head>
<body>
	<!-- Start Header -->
	<header class="header" id="header">
		<div class="container">
					<div class="row align-items-center">
					<div class="col-6 col-lg-2">
						<a href="#"><img class="logo" src="assets/img/logo.svg"></a>
					</div>
						
					<div class="col-6 col-lg-5 offset-lg-1 d-lg-block">
						<div class="menu-main d-flex align-items-center">
							<button type="button" class="hamburger slicknav_btn slicknav_collapsed ml-auto d-block d-lg-none"><i class="fa-solid fa-bars"></i></button>
						<div class="main-menu ">
						<nav class="menu" id="navigation">
							<ul class="menu-list d-lg-flex ">
								<li><a class="menu-item_active" href="index.html">Главная</a></li>
								<li><a class="menu-item" href="shop.html">Магазин</a></li>
								<li><a class="menu-item" href="about.html">О бренде</a></li>
								<li><a class="menu-item" href="contact.html">Контакты</a></li>
							</ul>
						</nav>
						</div>
						</div>
					</div>
					<div class="col-2 col-lg-3 ml-auto d-lg-block">
						<nav class="contacts-header">
							<ul class="contact d-flex align-items-center">
								<li><button type="button" class="btn-call" href="#"></button></li>
								<li><a href="tel:+74958235412" class="phone-number mr-2 ml-2">+7 (495) 823-54-12</a></li>
								<li><a href="#"><img class="bag" src="assets/img/shop-bag.svg"></a></li>
							</ul>
						</nav>
					</div>
					<div class="wrapper-modal">
						<div class="overlay"></div>
						<div class="modal-window">
							<h3 class="modal-title">Заказать обратный звонок</h3>
							<form action="#" class="form-order form-val" id="form-book" novalidate="novalidate">
								<input type="text" class="input form-book" name="firstName" placeholder="Имя">
								<input type="email" class="input form-book" name="email" placeholder="Email">
								<input type="tel" class="input form-book" name="phone" placeholder="Телефон">
								<button type="submit" class="btn-modal border-0">Заказать звонок</button>
							</form>
							<button type="button" class="modal-close">×</button>
						</div>
					</div>
				</div>
			</div>
		</header>
		<!-- End header -->
		<!-- Start Hero section -->
		<section class="hero-section">
			<div class="container">
				<div class="row">
					<div class="col-12 col-md-6 col-lg-7">
						<div class="slider-header-text">
								<div class="slider-header_item">
									<h1 class="hero-title text-sm-center text-md-left" data-animation="fadeInLeft" data-delay=".2s">
										Новые поступления в этом сезоне
									</h1>
									<p class="hero-desc text-sm-center text-md-right" data-animation="fadeInLeft" data-delay=".4s">
										Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.
									</p>
								</div>
							</div>
						<div class="buttons align-items-center d-flex offset-lg-1">
							<div class="arrow d-none d-lg-block">
								<a class="arrow-down " href="#"></a>
							</div>
							<button type="button" class="btn btn-hero-section rounded-0">Открыть магазин</button>
						</div>
						<div class="hero-title-pagination swiper-pagination"></div>
					</div>
					<div class="col-md-5 mx-sm-auto ml-auto col-lg-5 ">
						<div class="slider-header-img">
							<div class="slider-header-img_item">
								<img class="main-image_girl mx-sm-auto ml-auto" src="assets/img/header-main-photo.png">
							</div>
							<div class="slider-header-img_item">
								<img class="main-image_girl mx-sm-auto ml-auto" src="assets/img/header-main-photo.png">
							</div>
							<div class="slider-header-img_item">
								<img class="main-image_girl mx-sm-auto ml-auto" src="assets/img/header-main-photo.png">
							</div>
						</div>
						<div class="secondary-images">
							<img class="second-image" src="assets/img/header-photo-2.png" alt="girl">
							<img class="third-image" src="assets/img/header-photo-3.png" alt="girl2">
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End hero section -->
	<section class="advantages">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-12 mx-sm-auto text-center text-md-left">
					<h2 class="section-title section-title-advantages">
						Что для нас важно
					</h2>
				</div>
				<div class="col-12 col-md-6 col-lg-4">
					<div class="skill">
						<img class="advantages-img" src="assets/img/icon-header-1.svg" alt="quality">
					<h4 class="skill_title text-center text-lg-left">
						Качество
					</h4>
					<p class="skill_text">
						Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества
					</p>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-4">
					<div class="skill">
						<img class="advantages-img" src="assets/img/icon-header-2.svg" alt="speed">
					<h4 class="skill_title text-center text-lg-left">
						Скорость
					</h4>
					<p class="skill_text">
						Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах
					</p>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-4">
					<div class="skill">
						<img class="advantages-img" src="assets/img/icon-header-3.svg" alt="response">
					<h4 class="skill_title text-center text-lg-left">
						Ответственность
					</h4>
					<p class="skill_text">
						Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing
					</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- End advantages section -->
	<!-- Start new-collection -->
	<section class="new-collection">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-12">
					<h2 class="section-title section-title-collection text-sm-center text-md-left">
						Новая коллекция
					</h2>
				</div>
				<div class="col-12 col-md-6 col-lg-4">
					<div class="cart">
						<a сlass="shop-item" href="#"><img class="shop-item_girl" src="assets/img/photo-store.png"></a>
						<h4 class="title-item-name text-center">
							Футболка USA
						</h4>
					<div class="price d-flex align-items-center justify-content-center">
						<span class="new-collection-old-price-item">$229</span>
						<span class="new-collection-price-item">$129</span>
					</div>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-4">
					<div class="cart">
						<a сlass="shop-item" href="#"><img class="shop-item_girl" src="assets/img/photo-store-2.png" alt="girl"></a>
						<h4 class="title-item-name text-center">
							Купальник Glow
						</h4>
					<div class="price d-flex align-items-center justify-content-center">
						<span class="new-collection-price-item">$129</span>
					</div>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-4">
					<div class="cart">
						<a сlass="shop-item" href="#"><img class="shop-item_girl" src="assets/img/photo-store-3.png" alt="girl"></a>
						<h4 class="title-item-name text-center">
							Свитшот Sweet Shot
						</h4>	
					<div class="price d-flex align-items-center justify-content-center">
						<span class="new-collection-price-item">$129</span>
					</div>
					</div>
				</div>
				<div class="col-12">
					<button class="btn btn-collection  mx-auto rounded-0">Открыть магазин</button>
				</div>
			</div>
		</div>
	</section>
	<!-- End new-collection section -->
	<!-- Start team section -->
	<section class="team">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-12">
					<h2 class="section-title section-title-team">
						Команда мечты Womazing
					</h2>
				</div>
				<div class="col-12 col-lg-8">
					<div class="slider">
							<div class="team-slide-img slider_item">
								<img class="team-img" src="assets/img/woman-team.png" alt="women">
							</div>
							<div class="team-slide-img slider_item">
								<img class="team-img" src="assets/img/woman-team-2.png" alt="women">
							</div>
							<div class="team-slide-img slider_item">
								<img class="team-img" src="assets/img/woman-team-3.png" alt="women">
							</div>
						</div>
					<div class="team-button-prev swiper-button-prev"></div>
					<div class="team-button-next swiper-button-next"></div>
					<div class="team-pagination swiper-pagination"></div>
			</div>
			<div class="col-12 col-lg-3 offset-lg-1">
				<div class="about">
					<h5 class="title-team">
						Для каждой
					</h5>
					<p class="desc-team">
						Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
					</p>
					<p class="desc-team-down">
						Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.
					</p>
					<a class="more-about" href="#">Подробнее о бренде</a>
				</div>
			</div>
			</div>
		</div>
	</section>
	<!-- End team section -->
	<!-- Start footer -->
	<footer class="footer" id="footer">
		<div class="container">
			<div class="row">
				<div class="col-6 col-sm-6 col-lg-3">
					<a href="#"><img class="logo" src="assets/img/logo.svg"></a>
					<div class="policy">
						<span class="policy_rights">© Все права защищены</span>
							<ul class="link-policy">
								<li class="policy-link-item"><a href="#">Политика конфиденциальности</a></li>
								<li class="policy-link-item"><a href="#">Публичная оферта</a></li>
							</ul> 
					</div>
						
				</div>
				<div class="col-lg-6 offset-lg-1 d-none d-lg-block">
					<div class="menu-main-footer d-flex">
						<div class="footer-menu ">
						<nav class="menu-footer ">
							<ul class="menu-list d-flex ">
								<li><a href="#">Главная</a></li>
								<li><a href="#">Магазин</a>
									<ul class="store-items">
										<li class="store-item"><a href="#">Пальто</a></li>
										<li class="store-item"><a href="#">Свитшоты</a></li>
										<li class="store-item"><a href="#">Кардиганы</a></li>
										<li class="store-item"><a href="#">Толстовки</a></li>
									</ul>
								</li>
								<li><a href="#">О бренде</a></li>
								<li><a href="#">Контакты</a></li>
							</ul>
						</nav>
						</div>
						</div>
					</div>
					<div class="col-6 col-sm-4 col-lg-2 ml-auto">
						<div class="contacts">
							<a href="tel:+74958235412" class="contacts-phone-number">+7 (495) 823-54-12</a>
							<a href="#" class="site-link">hello@womazing.com</a>
						</div>
						<div class="social-links ">
							<ul class="social-links-items justify-content-end  d-flex align-items-center">
								<!-- noindex -->
								<li><a href="#" rel="nofollow noopener noreferrer" target="_blank"><img src="assets/img/instagram.svg"></a></li>
								<li><a href="#" rel="nofollow noopener noreferrer" target="_blank"><img src="assets/img/facebook.svg"></a></li>
								<li><a href="#" rel="nofollow noopener noreferrer" target="_blank"><img src="assets/img/twitter.svg"></a></li>
								<!-- noindex -->
							</ul>
					</div>
					<div class="payments">
						<!-- noindex -->
						<img class="visa-mastercard ml-auto" src="assets/img/visa-mastercard.svg">
						<!-- noindex -->
					</div>
				</div>
				</div>
				</div>
	</footer>
	<!-- End Footer -->
	<script src="https://kit.fontawesome.com/3925e05733.js" crossorigin="anonymous"></script>
	<script src="assets/js/jquery.min.js"></script>
	<script src="assets/js/slick.min.js"></script>
	<script src="assets/js/main.js"></script>
</body>
</html>
