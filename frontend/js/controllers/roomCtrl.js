angular.module('app').controller('roomCtrl', function ($scope, $http, $stateParams) {
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

    $scope.addRoom = function (room) {
        $http.post('http://localhost:3003/api/rooms/', room).then(function () {
            delete $scope.room
            loadRoom()
        })
    }

    $scope.deleteRoom = function (room) {
        $http.delete('http://localhost:3003/api/rooms/' + room._id).then(function () {
            loadRoom()
        })
    }

    loadRoom()
    loadUnit()
})