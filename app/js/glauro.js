$(document).ready(function() {
	
	listar_sobre();

	$('#sobre').click(function(event) {

		listar_sobre();

	});

	function listar_sobre(){
		$.ajax({
			url: 'http://localhost/glauroqjuliani/app/content/texto.json',
			type: 'GET',
			dataType: 'json',
			success: function(json){
				$.each(json, function(index, val) {
					var txt = (val.id)
					console.log(txt)
				});
            },//success
            error: function(XMLHttpRequest, textStatus, errorThrown){
            	alert('Erro!');
    		}//error
    	});
	}

});//end document