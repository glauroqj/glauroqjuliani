app.controller('SobreCtrl', function($rootScope, $location)
{
	$rootScope.aba = $location.path();
	listar_sobre();
});

app.controller('EnsinoCtrl', function($rootScope, $location)
{
	$rootScope.aba = $location.path();
	listar_ensino();
});

app.controller('PortfolioCtrl', function($rootScope, $location)
{
	$rootScope.aba = $location.path();
	listar_portfolio();

});

app.controller('ContatoCtrl', function($rootScope, $location)
{
	$rootScope.aba = $location.path();
});