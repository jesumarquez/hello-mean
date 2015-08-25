angular.module('meanApp.directives',[])
.directive('maCustomerList', function(){
    return{
        template: '<ul><li ng-repeat="customer in customers">{{customer.firstName}}, {{customer.lastName}}</li></ul>'
    };
});