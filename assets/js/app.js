$(function () {

	// Фиксированное меню
	function fixedMenu() {
		if ($(window).width() > 991) {
			let s = $(window).scrollTop();
			if (s > 70) {
				$('.header__menu_fixed').css({
					display: 'flex'
				});
				$('.header__top-wrapper').addClass('header__top-wrapper_fixed');
			} else {
				$('.header__menu_fixed').css({
					display: 'none'
				});
				$('.header__top-wrapper').removeClass('header__top-wrapper_fixed');
			}
		} else {
			$('.header__top-wrapper').removeClass('header__top-wrapper_fixed');
			$('.header__menu_fixed').css({
				display: 'none'
			});
		}
	}
	fixedMenu();

	$(window).on('scroll', function () {
		fixedMenu();
	});

	$(window).resize(function () {
		fixedMenu();
		if ($(window).width() > 991) {
			$('.header__bottom-wrapper').removeClass('header__bottom-wrapper_active');
			$('.menu-link').removeClass('menu-link_active');
		}
	})

	// Мобильное меню
	let link = $('.menu-link');
	link.on('click', function (e) {
		e.preventDefault();
		link.toggleClass('menu-link_active');
		$('.header__bottom-wrapper').toggleClass('header__bottom-wrapper_active');
	});


	$('.price__left-item').click(function (event) {
		event.preventDefault();
		$(this).addClass('price__left-item_active');
		$(this).siblings().removeClass('price__left-item_active');

		var tab = $(this).attr('href');
		$('.price__table').not(tab).removeClass('price__table_show');
		$(tab).addClass('price__table_show');

		hideRow();
	});

	hideRow();

	function hideRow() {
		$(".price__table_show .price__row").hide();
		$(".price__table_show .price__row").slice(0, 9).show();
		$('.price__button').show();
	}

	// Кнопка "Увидеть все возможные поломки" 
	$(".price__button").on('click', function (e) {
		e.preventDefault();
		$('.price__button').hide();
		$(".price__table_show .price__row:hidden").slice(0, 100).fadeIn();
	});

	// Открытие/закрытие модальных окон
	$('.popup-close').on('click', function () {
		$('.popup').fadeOut();
	});

	$('.modal__button').on('click', function () {
		$('.header__bottom-wrapper').removeClass('header__bottom-wrapper_active');
		$('.menu-link').removeClass('menu-link_active');
		$('.popup-call').fadeIn();
	});

	$('.popup form').on('submit', function (e) {
		e.preventDefault();
		$('.popup').fadeOut();
		$('.popup-thank').fadeIn();
	});

	$('form').on('submit', function (e) {
		e.preventDefault();
		$('.popup-thank').fadeIn();
	});

	$('.popup-thank__button').on('click', function () {
		$('.popup').fadeOut();
	});

	// Плавная прокрутка
	$('ul li, .header__menu_fixed li').click(function () {
		var scroll_el = $(this).find('a').attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({
				scrollTop: $(scroll_el).offset().top - 110
			}, 800);
			$('.header__bottom-wrapper').removeClass('header__bottom-wrapper_active');
			$('.menu-link').removeClass('menu-link_active');
		}
		return false;
	});

	$('.logo-wrapper').on('click', function (e) {
		var scroll_el = $(this).attr('href');
		if ($('.header__top-wrapper').hasClass('header__top-wrapper_fixed')) {
			if ($(scroll_el).length != 0) {
				$('html, body').animate({
					scrollTop: $(scroll_el).offset().top - 180
				}, 800);
			}
		} else {
			return false;
		}
	});


	// карта
	YaMapsShown = false;
	$(document).ready(function () {

		$(window).scroll(function () {
			if (!YaMapsShown) {
				if ($(window).scrollTop() + $(window).height() > $(document).height() - 700) {
					showYaMaps();
					YaMapsShown = true;
				}
			}
		});
	});

	function showYaMaps() {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A7345a66303f22d68e9e51fad13ffcd6221c7800b9810c6ec678751e2eac1e2db&amp;lang=ru_RU&amp;scroll=false';
		document.getElementById('map').appendChild(script);
	}


	// Слайдер отзывов
	var feedbackSlider = new Swiper('.feedback-container', {
		loop: true,
		navigation: {
			nextEl: '.slide-next-feedback',
			prevEl: '.slide-prev-feedback',
		},
		slidesPerView: 2,
		speed: 600,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		},
		breakpoints: {
			300: {
				slidesPerView: 1
			},
			768: {
				slidesPerView: 2
			}
		}
	})

});