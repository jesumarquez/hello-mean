var app = angular.module('meanApp.controllers',[]);

app.controller('customerController', ['$scope','$http', 'customerService', 
    function($scope, $http, customerService){

        $scope.customers = null;
        
        // $http.get('/scripts/customer/customer-data.json').success(function(data){
        //     $scope.customers = data;
        // });

        customerService.get().query(function(data){
           $scope.customers = data; 
        });

        $scope.current = {};
        
        $scope.add = function(){
            customerService.add($scope.current);
            $scope.current = {};
        };
    }
]);