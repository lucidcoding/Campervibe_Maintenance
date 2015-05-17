angular.module('campervibeMaintenance.servicingController', []).controller('servicingController',
['$scope', '$routeParams', '$location', 'servicingService',
function ($scope, $routeParams, $location, servicingService) {

    $scope.navigateTo = function(url) {
        $location.path(url);
    };

    $scope.checkIn = function(){
        $scope.checkInViewModel = {};

        $scope.checkInViewModel.vehicles = [
            { id: '4C2EC41A-D3F1-41A1-A69D-D955874E85AF', name: 'Arthur' },
            { id: 'F2C853EC-E987-41A3-BADC-F7ED46C4FF03', name: 'Betty' },
            { id: '66E37F65-86B2-4B65-BF37-7820DB82BEF2', name: 'Arthur' },
        ];

        $scope.submit = function () {
            servicingService.checkIn($scope.checkInViewModel)
            .success(function (response) {
                $scope.servicings = response;
            })
            .error(function (message) {
                alert(message);
            });
        };

        $scope.cancel = function() {
            location.path('/servicing/list');
        };
    };

    $scope.list = function () {
        servicingService.list()
        .success(function (response) {
            $scope.servicings = response;
        })
        .error(function (message) {
            alert(message);
        });
    };

    $scope.view = function () {
        servicingService.getById({
            id: $routeParams.servicingId
        })
        .success(function (response) {
            $scope.servicing = response;
        })
        .error(function (message) {
            alert(message);
        });
    };
}]);