var app = angular.module('meanApp.services',[]);

app.factory('customerService',['$http','$resource', function($http, $resource){
        var Customer = $resource('/api/customer');
    
        function get(){
            return Customer;
        }

        function add(newCustomer){
            var customer = new Customer();
            customer.firstName = newCustomer.firstName;
            customer.lastName = newCustomer.lastName;
            customer.$save(function(response){
                console.log(response);
            });
        }
        
        var customerSvc = {
            get : get,
            add : add
        };
        
        return customerSvc;
    }
]);
