app.factory('getSubNav',['$http', function($http){

return {
	getmenu : function(param){
		if(param.toLowerCase() == 'men'){
			var path= 'menSubmenu';
		} else if (param.toLowerCase() == 'women'){
			path= 'womenSubmenu';
		} else if (param.toLowerCase() == 'appliances'){
			path= 'appliancesSubmenu';
		} else if (param.toLowerCase() == 'electronics'){
			path= 'electronicsSubmenu';
		} else if (param.toLowerCase() == 'babymore'){
			path= 'babymoreSubmenu';
		} else if (param.toLowerCase() == 'kidstoys'){
			path= 'kidstoysSubmenu';
		}
		return $http.get("http://localhost:8081/"+path).then(function(response){
			return response.data;
		});
	}
}

}]);