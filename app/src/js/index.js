requirejs.config({
	name: 'app',
	baseUrl: 'app/dist/libs',
	shim : {
		bootstrap : {
			deps : [ 'jquery'],
			exports: 'bootstrap'
		},

		scrollreveal : {
			deps : [ 'jquery'],
			exports: 'scrollreveal.min'
		}

	},
	paths : {
		jquery : 'jquery.min',
		bootstrap : 'bootstrap.min',
		owl_carousel : 'owl.carousel.min',
		scrollreveal : 'scrollreveal.min'
	}
});

require(['jquery','bootstrap'], function ($) {

	$('.nav, .btn-desafio').on('click', 'a', function(event){
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
	});

	$('.navbar-brand img').tooltip();
	$('.texto-info a').tooltip();

});/* end-require */

function scrollParallax() {
	var scrollPos;
	var headerText = document.querySelector('.titulo-topo');
	scrollPos = window.scrollY;

	if (scrollPos <= 600) {
		headerText.style.transform =  "translateY(" + (-scrollPos/3) +"px" + ")";
		headerText.style.opacity = 1 - (scrollPos/600);
	}
}
window.addEventListener('scroll', scrollParallax);