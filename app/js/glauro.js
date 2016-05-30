$(document).ready(function() {	

	$( document ).ajaxComplete(function() {
		$('.overlay').hide();
	});

	$('.navbar-header button').click(function(event) {
		$('#menu_glauro').toggleClass('collapse');

		$('.nav li').click(function(event) {
			$('#menu_glauro').toggleClass('collapse');
		});
	});

	$('#sobre').click(function(event) {

		listar_sobre();

	});



});//end document