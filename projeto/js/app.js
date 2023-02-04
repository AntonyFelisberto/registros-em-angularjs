var app = angular.module("myApp",['ng-route']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.
        when('/login',{
            temmplateUrl:"views/login.html",
            controller:"RegistrationController"
        }).
        when('/register',{
            temmplateUrl:"views/register.html",
            controller:"RegistrationController"
        }).
        when('/sucess',{
            temmplateUrl:"views/sucess.html",
            controller:"SucessController"
        }).
        otherwise({
            redirecTo:'/login'
        })
}])