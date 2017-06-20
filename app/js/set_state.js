// app.provider('setState',['$stateProvider',function($stateProvider){

// 	var createstate = function(name,options){
// 		$stateProvider.state(name,options);
// 	};

// 	return{
// 		createstate : createstate
// 	}

// }]);

app.provider('setState',['$stateProvider', function setState($stateProvider) {
  // runtime dependencies for the service can be injected here, at the provider.$get() function.
  this.$get = function($q, $timeout, $state) { // for example
    return { 
      addState: function(name, state) { 
        $stateProvider.state(name, state);
      }
    }
  }
}]);