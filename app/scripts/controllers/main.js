'use strict';

angular.module('referenceMeApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.tags = [
      'Git',
      'HTML',
      'CSS',
      'Javascript',
      'AngularJS',
      'Ruby',
      'Misc',
      'Funny'
    ];

    $scope.handleClick = function (selectedCategory){
    	// // console.log("handleClick");
     //    console.log(selectedCategory);

     //    $rootScope.selection = selectedCategory;

     $location.path('/categories');



    };
  });
