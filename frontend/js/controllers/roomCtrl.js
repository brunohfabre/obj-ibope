angular.module('app').controller('roomCtrl', function ($scope, $http, $stateParams) {

    $scope.teste = $stateParams.unitId

    var loadRoom = function () {
        $http.get('http://localhost:3003/api/rooms/').then(function (response) {
            $scope.rooms = response.data
        })
    }

    var loadUnit = function () {
        $http.get('http://localhost:3003/api/units/' + $stateParams.unitId).then(function (response) {
            $scope.unit = response.data
        })

        
    }

    $scope.addRoom = function (index) {
        $scope.unit.rooms.splice(index + 1, 0, {})
    }

    $scope.deleteRoom = function (index) {
        if ($scope.unit.rooms.length > 1) {
            $scope.unit.rooms.splice(index, 1)
        }
    }

    $scope.updateUnit = function (unit) {
        $http.put('http://localhost:3003/api/units/' + $stateParams.unitId, unit).then(function () {
            loadUnit()
        })
    }

    loadRoom()
    loadUnit()
})