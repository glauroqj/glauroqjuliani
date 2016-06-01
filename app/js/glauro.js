$(document).ready(function() {	

	$( document ).ajaxComplete(function() {
			$('.overlay').hide();
	});

	$('.navbar-header button').click(function(event) {
		$('#menu_glauro').slideToggle(150);
		$('.nav li').click(function(event) {
			$('#menu_glauro').slideUp(150);
		});
	});

	$('#sobre').click(function(event) {
		listar_sobre();
	});
	$('.logo').click(function(event) {
		listar_sobre();
	});

});//end document

//calls ajax

