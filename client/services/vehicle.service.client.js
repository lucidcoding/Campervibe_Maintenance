angular.module('campervibeMaintenance.vehicleService', []).factory('vehicleService',
['$http',
function ($http) {

    var vehicleService = {};

    vehicleService.list = function () {
        return $http({
            method: 'GET',
            url: 'http://campervibevehicleinventory.azurewebsites.net/vehicle/restindex',
            withCredentials: true
        });
    };

    vehicleService.getById = function (args) {

        return $http({
            method: 'GET',
            url: 'servicing/' + args.id,
            withCredentials: true
        });
    };

    return vehicleService;
}]);