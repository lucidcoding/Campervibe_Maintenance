var app = angular.module('campervibeMaintenance', [
  'ngRoute',
]);

app.config(['$routeProvider',
function ($routeProvider) {

    //var version = getVersion();

    $routeProvider
        .when("/servicing/list/", { templateUrl: "views/list.servicing.view.html"})
        .otherwise({ redirectTo: '/servicing/list' });

    /*
    $mdThemingProvider.theme('default')
        .primaryPalette('grey')
        .accentPalette('grey');
    */

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