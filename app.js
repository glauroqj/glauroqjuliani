var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
   // remove o # da url
   $locationProvider.html5Mode(false);

   $routeProvider

   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/', {
      templateUrl : 'views/sobre.html',
      controller     : 'SobreCtrl',
   })

   // para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
   .when('/ensino', {
      templateUrl : 'views/ensino.html',
      controller  : 'EnsinoCtrl',
   })

   // para a rota '/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
   .when('/portfolio', {
      templateUrl : 'views/portfolio.html',
      controller  : 'PortfolioCtrl',
   })

   .when('/contato', {
      templateUrl : 'views/contato.html',
      controller  : 'ContatoCtrl',
   })
   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
});