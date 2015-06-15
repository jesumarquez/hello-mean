var app = angular.module('meanApp.services',[]);

app.factory('customerService', function(){
    
        var list = [
            { firstName : '1Jesú', lastName : 'Márquez' },
            { firstName : 'Benjamín', lastName : 'Márquez' }
            ];
        
        function add(customer)
        {
            list.push(customer);
        }
        
        var customerSvc = {
            list : list,
            add : add
        };
        
        return customerSvc;
    }
);
