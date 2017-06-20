app.controller('headerController',['$scope','getSubNav','$http','$stateParams','$location',function($scope,getSubNav,$http,$stateParams,$location){
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

	$scope.__gotoPage = function(para,parentname){
		var url_path, statename;
		if(para.childmenu.search("&") != "-1"){
			statename = para.childmenu.split(" &")[0];
			url_path =  para.childmenu.split(" &")[0] + "-" + para.childmenu.split("& ")[1];
		} else if(para.childmenu.search(" ") != "-1"){
			statename = para.childmenu.split(" ")[0];
			url_path =  para.childmenu.split(" ")[0] + "-" + para.childmenu.split(" ")[1];
		} else{
			url_path = para.childmenu;
		}


		$location.path('/products/'+parentname+"/"+url_path);
	};


}]);