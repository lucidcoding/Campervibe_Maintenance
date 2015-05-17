angular.module('campervibeMaintenance.servicingService', []).factory('servicingService',
['$http',
function ($http) {

    var servicingService = {};

    servicingService.list = function () {
        return $http({
            method: 'GET',
            url: 'servicing',
            withCredentials: true
        });
    };

    servicingService.getById = function (args) {

        return $http({
            method: 'GET',
            url: 'servicing/' + args.id,
            withCredentials: true
        });
    };

    servicingService.checkIn = function () {
        return $http({
            method: 'POST',
            url: 'servicing/checkin',
            withCredentials: true
        });
    };

    return servicingService;
}]);