var app = angular.module('meanApp',[]);

app.controller('customerController', ['$scope', 
    function($scope){
        $scope.name = 'Customer1';
    }
]);