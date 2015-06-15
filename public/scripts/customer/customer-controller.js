var app = angular.module('meanApp.controllers',[]);

app.controller('customerController', ['$scope', 'customerService', 
    function($scope, customerService){

        $scope.customers = customerService.list;
            
        $scope.current = {};
        
        $scope.add = function(){
            customerService.add($scope.current);
            $scope.current = {};
        };
    }
]);