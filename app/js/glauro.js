$(document).ready(function() {	
	listar_sobre();
	listar_ensino();
	listar_portfolio();

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
	$('.navbar').on('click', '#portfolio', function(event) {
		$('.box .progress div').attr('style', 'width: 0');
		$('.ferramentas .box li div i').remove();
		$('.portfolio div').remove();
		$('.overlay').show();
		setTimeout(function(){
			listar_portfolio();
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

			$('#view_sobre .ola').append("<h2 class='animated fadeIn'>"+ ola +"</h2>");
			$('#view_sobre .apresentacao').append("<h3 class='animated fadeIn'>"+ apresentacao +"</h3><div class='challenger text-center'><a id='contato' ng-class='{active: aba == '/contato'}' class='btn btn-lg btn-challenger' href='#/contato'><i class='fa fa-hourglass-start' aria-hidden='true'></i> " + desafio + "</a></div>");

			$.each(json.sobre.trabalho, function(index, val) {
				var funcao = (val.funcao)
				var empresa = (val.empresa)
				var descricao = (val.descricao)
				var tempo = (val.tempo)

				$('#view_sobre .job').append("<div class='col-sm-12 col-md-4 col-lg-4 animated rotateInDownLeft'><div class='box'><ul class='list-unstyled'><li>"+ funcao +"</li><li>"+ empresa +"</li> <li>"+ descricao +"</li><li>"+ tempo +"</li></ul></div></div>");

			});

            },//success
            error: function(XMLHttpRequest, textStatus, errorThrown){
            	alert('Erro!');
    		}//error
    	});
}

function listar_ensino(){
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

			$('#view_ensino .ensino').append("<div class='col-sm-12 col-md-4 col-lg-4 animated slideInLeft'><div class='box'><ul class='list-unstyled'><li>"+ curso +"</li><li>"+ instituicao +"</li> <li>"+ duracao +"</li><li>"+ status +"</li><li>"+ data +"</li></ul></div></div>");


			var titulo = (json.ensino.premiacao.titulo)
			var nome_projeto = (json.ensino.premiacao.nome_projeto)
			var texto_doc = (json.ensino.premiacao.texto_doc)
			var doc_link = (json.ensino.premiacao.doc_link)
			var data = (json.ensino.premiacao.data)
			var imagem_url = (json.ensino.premiacao.imagem_url)

			$('#view_ensino .premiacao').append("<div class='col-sm-12 col-md-6 col-lg-6 animated slideInLeft'><div class='box'><ul class='list-unstyled'><li class='tit'>"+ titulo +"</li><li>"+ nome_projeto +"</li> <li>"+ texto_doc +"</li><li><a target='new' href="+ doc_link +"><i class='fa fa-external-link' aria-hidden='true'></i> Documentação Completa Aqui!!!</a></li><li>"+ data +"</li></ul></div></div><div class='col-sm-12 col-md-6 col-lg-6 animated slideInRight'><div class='box'><img class='img-responsive' src="+ imagem_url +" alt='Grupo C.A.S Ganhador Melhor Projeto Aplicado Una' title='Grupo C.A.S Ganhador Melhor Projeto Aplicado Una'></div></div>");


            },//success
            error: function(XMLHttpRequest, textStatus, errorThrown){
            	alert('Erro!');
    		}//error
    	});
}

function listar_portfolio(){
	$.ajax({
		url: 'http://glauroqjuliani.com.br/new/glauroqjuliani/app/content/texto.json',
		type: 'GET',
		dataType: 'json',
		success: function(json){
			var html5 = (json.portfolio.skills.html5)
			var css3 = (json.portfolio.skills.css3)
			var bootstrap = (json.portfolio.skills.bootstrap)
			var jquery = (json.portfolio.skills.jquery)
			var less = (json.portfolio.skills.less)
			var sass = (json.portfolio.skills.sass)
			var git = (json.portfolio.skills.git)
			var node = (json.portfolio.skills.node)

			$('#view_portfolio .skills .html div').attr('style', html5);
			$('#view_portfolio .skills .css div').attr('style', css3);
			$('#view_portfolio .skills .bootstrap div').attr('style', bootstrap);
			$('#view_portfolio .skills .jquery div').attr('style', jquery);

			$('#view_portfolio .ferramentas .git').append(git);
			$('#view_portfolio .ferramentas .less').append(less);
			$('#view_portfolio .ferramentas .sass').append(sass);
			$('#view_portfolio .ferramentas .node').append(node);

			$.each(json.portfolio.ecommerce ,function(index, val) {
				var nome_loja = (val.nome_loja);
				var ramo = (val.ramo);
				var foto_url = (val.foto_url);
				var loja_link = (val.loja_link);
				var ticket_info = (val.ticket_info);

				$('#view_portfolio .portfolio').append("<div class='col-sm-12 col-md-6 col-lg-6 animated fadeInUp text-center'><div class='box'><div class='loja_titulo'>"+ nome_loja +"</div><div class='ramo'>"+ ramo +"</div><div class='info'><b>"+ ticket_info +"</b></div><div class='foto'><img class='img-responsive' src="+ foto_url +" alt="+ nome_loja +" title="+ nome_loja +"><div class='acessar_loja'><a target='new' class='btn btn-sm btn-okay' href="+ loja_link +" >Acessar a loja "+ nome_loja +"</a></div></div></div></div>")
			});

            },//success
            error: function(XMLHttpRequest, textStatus, errorThrown){
            	alert('Erro!');
    		}//error
    	});
}