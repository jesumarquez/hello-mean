var app = angular.module('meanApp.controllers',[]);

app.controller('customerController', ['$scope', 
    function($scope){
        $scope.name = 'Customer1';
    }
]);