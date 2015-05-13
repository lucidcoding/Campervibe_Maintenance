angular.module('campervibeMaintenance.servicingController', []).controller('servicingController',
['$scope', '$routeParams', '$location', 'servicingService',
function ($scope, $routeParams, $location, servicingService) {

    $scope.navigateTo = function(url) {
        $location.path(url);
    };

    $scope.list = function () {
        servicingService.list({
            success: function (response) {
                $scope.servicings = response;
            },
            error: function (message) {
                alert(message);
            }
        });
    };

    $scope.view = function () {
        servicingService.getById({
            id: $routeParams.servicingId,
            success: function (response) {
                $scope.servicing = response;
            },
            error: function (message) {
                   alert(message);
            }
        });
    };
}]);