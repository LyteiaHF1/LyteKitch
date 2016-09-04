'use strict';

/*global App*/

app.angular.module('angularApp')
  .controller('MainCtrl', function ($scope) {

    $scope.openPdf() = function(){
    	$window.open("Nicole_Aitchison-Resume.pdf");
    };

  });
