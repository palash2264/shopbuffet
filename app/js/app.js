var app = angular.module('testshopBuffet',['ui.router']);

app.directive('headerSection',function(){
	var directive = {};

	directive.restrict = "E";
	directive.templateUrl = 'html/header.html';
	directive.controller = "headerController";
	return directive;
});

