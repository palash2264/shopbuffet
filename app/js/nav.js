(function() {
  var app = angular.module("myApp", []);

    app.controller("appController", function($scope){
      $scope.image= "images/ArrowDown.png";
    });

    app.directive('subMenu', function() {
    return {
      restrict: 'AE',
      replace: true,
      template: '<ul class="submenu"><li class="sublink"><a href="#">Portfolio</a></li><li class="sublink"><a href="#">Interests</a></li><li class="sublink"><a href="#">Photos</a></li></ul>',
      //restrict: 'E', /*attaches directive to class called submenu*/
      link: function(scope, elem) {
        console.log(elem);
        elem.parent().bind('mouseover', function() {
         //elem.bind('mouseover', function() {
          /*Displays the submenu*/
          elem.css('display', 'block');
          /*add class highlight to the class linkName.  We have to use this chain of methods because angular doesn't support .siblings()*/
         // elem.parent().children().eq(0).addClass("highlight");
        });
        elem.parent().bind('mouseleave', function() {
          elem.css('display', 'none');
          //elem.parent().children().eq(0).removeClass("highlight");
        });
      }
    };
  }).directive('subMenu1', function() {
    return {
      restrict: 'AE',
      replace: true,
      template: '<ul class="submenu"><li class="sublink"><a href="#">Blog Post 1</a></li><li class="sublink"><a href="#">Blog Post 2</a></li><li class="sublink"><a href="#">Blog Post 3</a></li></ul>',
      //restrict: 'E', /*attaches directive to class called submenu*/
      link: function(scope, elem) {
        console.log(elem);
        elem.parent().bind('mouseover', function() {
         //elem.bind('mouseover', function() {
          /*Displays the submenu*/
          elem.css('display', 'block');
          /*add class highlight to the class linkName.  We have to use this chain of methods because angular doesn't support .siblings()*/
         // elem.parent().children().eq(0).addClass("highlight");
        });
        elem.parent().bind('mouseleave', function() {
          elem.css('display', 'none');
          //elem.parent().children().eq(0).removeClass("highlight");
        });
      }
    };
  });


}) ();