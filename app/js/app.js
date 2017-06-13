var app = angular.module('testshopBuffet',['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/dashboard');

	$stateProvider
		.state('dashboard',{
			url: '/dashboard',
			templateUrl: 'html/dashboard.html'
		})
		.state('men',{
			url: '/men',
			templateUrl: 'html/men.html'
		})
		.state('men-sub',{
			url:'/men/:pathport',
			templateUrl: 'new.html'
		})
		.state('women',{
			url: '/women',
			templateUrl: 'html/women.html'
		})
		.state('electronics',{
			url: '/electronics',
			templateUrl: 'html/electronics.html'
		})
		.state('appliances',{
			url: '/appliances',
			templateUrl: 'html/appliances.html'
		})
		.state('kidsandtoys',{
			url: '/kids-toys',
			templateUrl: 'html/kidsandtoys.html'
		})
		.state('babyandmore',{
			url: '/baby-more',
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

