angular.module('campervibeMaintenance.servicingService', []).factory('servicingService',
['$http',
function ($http) {

    var servicingService = {};

    servicingService.list = function (args) {

        return $http({
            method: 'GET',
            url: 'servicing',
            withCredentials: true
        })
        .success(function (response) {
            args.success(response);
        })
        .error(function (data, status, headers, config) {
            args.error(data.Message);
        });
    };

    servicingService.getById = function (args) {

        return $http({
            method: 'GET',
            url: 'servicing/' + args.id,
            withCredentials: true
        })
        .success(function (response) {
            args.success(response);
        })
        .error(function (data, status, headers, config) {
            args.error(data.Message);
        });
    };
    return servicingService;
}]);