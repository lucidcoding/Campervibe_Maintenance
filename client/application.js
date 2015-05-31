var app = angular.module('campervibeMaintenance', [
  'campervibeMaintenance.servicingController',
  'campervibeMaintenance.servicingService',
  'campervibeMaintenance.vehicleService',
  'ngMaterial',
  'ngRoute',
  'ngSanitize'
]);

app.config(['$routeProvider', '$mdThemingProvider',
function ($routeProvider, $mdThemingProvider) {

    //var version = getVersion();

    $routeProvider
        .when("/servicing/checkin/", { templateUrl: "views/servicing/checkin.servicing.view.client.html"})
        .when("/servicing/list/", { templateUrl: "views/servicing/list.servicing.view.client.html"})
        .when("/servicing/view/:servicingId", { templateUrl: "views/servicing/view.servicing.view.client.html"})
        .otherwise({ redirectTo: '/servicing/list' });

    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('purple');

    /*
    $mdThemingProvider.theme('header')
        .primaryPalette('deep-orange')
        .accentPalette('red');
    */
}]);

/*
app.run(function ($rootScope, $templateCache) {
    $templateCache.removeAll();

    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });
});*/