app.controller('headerController',['$scope','getSubNav','$http','$stateParams',function($scope,getSubNav,$http,$stateParams){
	$scope.my = {visibility : false};
	$scope.quantity = 4 ;
	$scope.showSubNav = function(item){
		$scope.my = {visibility : true};
		var id = item.currentTarget.id;

		getSubNav.getmenu(id).then(function(response){
			$scope.getvalue = response.data;
		});
	};

	$scope.hideSubNav = function(){
		$scope.my = {visibility : false};
	};
	$scope.portfolioId = $stateParams.pathport;
}]);