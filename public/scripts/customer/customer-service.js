var app = angular.module('meanApp.services',[]);

app.factory('customerService',['$http', function($http){
        var list = [];
    
        function get(){
            return $http.get('/scripts/customer/customer-data.json');
        }

        function add(customer){
            list.push(customer);
        }
        
        var customerSvc = {
            get : get,
            add : add
        };
        
        return customerSvc;
    }
]);
