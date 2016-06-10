var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
   // remove o # da url
   $locationProvider.html5Mode(false);

   $routeProvider

   // para a rota '/', carregaremos o template home.html e o controller 'SobreCtrl'
   .when('/', {
      templateUrl : 'app/views/sobre.html',
      controller     : 'SobreCtrl',
   })

   // para a rota '/ensino', carregaremos o template sobre.html e o controller 'EnsinoCtrl'
   .when('/ensino', {
      templateUrl : 'app/views/ensino.html',
      controller  : 'EnsinoCtrl',
   })

   // para a rota '/portfolio', carregaremos o template contato.html e o controller 'PortfolioCtrl'
   .when('/portfolio', {
      templateUrl : 'app/views/portfolio.html',
      controller  : 'PortfolioCtrl',
   })

   .when('/contato', {
      templateUrl : 'app/views/contato.html',
      controller  : 'ContatoCtrl',
   })
   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
});