app.controller('headerController',['$scope',function($scope){
	$scope.my = {visibility : false};
	$scope.showSubNav = function(item){
		$scope.my = {visibility : true};
		var id = item.currentTarget.id;
	};

	$scope.hideSubNav = function(){
		$scope.my = {visibility : false};
	};
}]);