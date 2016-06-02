$(document).ready(function() {	
	listar_sobre();
	listar_ensino();

	$('.navbar-header button').click(function(event) {
		$('#menu_glauro').slideToggle(150);
		$('.nav li').click(function(event) {
			$('#menu_glauro').slideUp(150);
		});
	});

	$('.navbar').on('click', '.logo, #sobre', function(event) {
		$('.overlay').show();
		setTimeout(function(){
			listar_sobre();
		}, 500);
	});


	$('.navbar').on('click', '#ensino', function(event) {
		$('.overlay').show();
		$('.ensino div, .premiacao div').remove();
		setTimeout(function(){
			listar_ensino();
		}, 500);
	});

	$( document ).ajaxComplete(function() {
		$('.overlay').hide();
	});
});//end document

//calls ajax
function listar_sobre(){
	$.ajax({
		url: 'http://glauroqjuliani.com.br/new/glauroqjuliani/app/content/texto.json',
		type: 'GET',
		dataType: 'json',
		success: function(json){
			var ola = (json.sobre.ola)
			var apresentacao = (json.sobre.apresenta)
			var desafio = (json.sobre.desafio)

			$('#view_sobre .ola').append(ola);
			$('#view_sobre .apresentacao').append(apresentacao);
			$('#view_sobre .challenger').append("<a id='contato' ng-class='{active: aba == '/contato'}' class='btn btn-lg btn-warning' href='#/contato'><i class='fa fa-hourglass-start' aria-hidden='true'></i> " + desafio + "</a>");

			$.each(json.sobre.trabalho, function(index, val) {
				var funcao = (val.funcao)
				var empresa = (val.empresa)
				var descricao = (val.descricao)
				var tempo = (val.tempo)

				$('#view_sobre .job').append("<div class='col-sm-12 col-md-4 col-lg-4'><div class='box'><ul class='list-unstyled'><li>"+ funcao +"</li><li>"+ empresa +"</li> <li>"+ descricao +"</li><li>"+ tempo +"</li></ul></div></div>");

			});

            },//success
            error: function(XMLHttpRequest, textStatus, errorThrown){
            	alert('Erro!');
    		}//error
    	});
}

function listar_ensino() {
	$.ajax({
		url: 'http://glauroqjuliani.com.br/new/glauroqjuliani/app/content/texto.json',
		type: 'GET',
		dataType: 'json',
		success: function(json){
			var curso = (json.ensino.curso)
			var instituicao = (json.ensino.instituicao)
			var duracao = (json.ensino.duracao)
			var status = (json.ensino.status)
			var data = (json.ensino.data_conclusao)

			$('#view_ensino .ensino').append("<div class='col-sm-12 col-md-4 col-lg-4'><div class='box'><ul class='list-unstyled'><li>"+ curso +"</li><li>"+ instituicao +"</li> <li>"+ duracao +"</li><li>"+ status +"</li><li>"+ data +"</li></ul></div></div>");


			var titulo = (json.ensino.premiacao.titulo)
			var nome_projeto = (json.ensino.premiacao.nome_projeto)
			var texto_doc = (json.ensino.premiacao.texto_doc)
			var doc_link = (json.ensino.premiacao.doc_link)
			var data = (json.ensino.premiacao.data)

			$('#view_ensino .premiacao').append("<div class='col-sm-12 col-md-4 col-lg-4'><div class='box'><ul class='list-unstyled'><li class='tit'>"+ titulo +"</li><li>"+ nome_projeto +"</li> <li>"+ texto_doc +"</li><li><a target='new' href="+ doc_link +"><i class='fa fa-external-link' aria-hidden='true'></i> Documentação Completa Aqui!!!</a></li><li>"+ data +"</li></ul></div></div>");


            },//success
            error: function(XMLHttpRequest, textStatus, errorThrown){
            	alert('Erro!');
    		}//error
    	});
}