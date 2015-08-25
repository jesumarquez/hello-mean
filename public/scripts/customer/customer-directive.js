angular.module('meanApp.directives',[])
.directive('maCustomerList', function(){
    return{
        restrict: 'E',
        templateUrl: 'scripts/customer/ma-customer-list.html'
    };
});