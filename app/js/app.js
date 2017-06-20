var app = angular.module('testshopBuffet',['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/dashboard');

	$stateProvider
		.state('dashboard',{
			url: '/dashboard',
			templateUrl: 'html/dashboard.html'
		})
		.state('men',{
			url: '/products/men',
			templateUrl: 'html/men.html'
		})
		.state('products',{
			url:'/products/:parentname/:pathport',
			templateUrl: 'html/submenu.html',
			controller: 'submenuPageCntrl'
		})
		.state('women',{
			url: '/products/women',
			templateUrl: 'html/women.html'
		})
		.state('electronics',{
			url: '/products/electronics',
			templateUrl: 'html/electronics.html'
		})
		.state('appliances',{
			url: '/products/appliances',
			templateUrl: 'html/appliances.html'
		})
		.state('kidsandtoys',{
			url: '/products/kids-toys',
			templateUrl: 'html/kidsandtoys.html'
		})
		.state('babyandmore',{
			url: '/products/baby-more',
			templateUrl: 'html/babyandmore.html'
		});
}]);

app.directive('headerSection',function(){
	var directive = {};

	directive.restrict = "E";
	directive.templateUrl = 'html/header.html';
	directive.controller = "headerController";
	return directive;
});

