var hcApp=angular.module("HcApp", ["ngRoute"]);
hcApp.config(function ($routeProvider) {    
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    })
    .when("/login", {       
        templateUrl: "app/login/login.html",
        controller: "loginCtrl"
    })
    .when("/messagesShow", {       
        templateUrl: "app/messages/messagesShow.html",
        controller: "messageCtrl"
    })

});