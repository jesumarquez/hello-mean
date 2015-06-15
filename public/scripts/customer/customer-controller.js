var app = angular.module('meanApp.controllers',[]);

app.controller('customerController', ['$scope', 
    function($scope){

        $scope.customers = [
            { firstName : 'Jesú', lastName : 'Márquez' },
            { firstName : 'Benjamín', lastName : 'Márquez' }
            ];
            
        $scope.current = {};
        
        $scope.add = function(){
            $scope.customers.push($scope.current);
            $scope.current = {};
        };
    }
]);