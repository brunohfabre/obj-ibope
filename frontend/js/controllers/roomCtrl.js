angular.module('app').controller('roomCtrl', function ($scope, $http) {
    var loadRoom = function () {
        $http.get('http://104.131.115.44:3003/api/rooms/').then(function (response) {
            $scope.rooms = response.data
        })
    }

    var loadUnit = function () {
        $http.get('http://104.131.115.44:3003/api/units/').then(function (response) {
            $scope.units = response.data
        })
    }

    $scope.addRoom = function (room) {
        $http.post('http://104.131.115.44:3003/api/rooms/', room).then(function () {
            delete $scope.room
            loadRoom()
        })
    }

    $scope.deleteTeacher = function (room) {
        $http.delete('http://104.131.115.44:3003/api/rooms/' + room._id).then(function () {
            loadRoom()
        })
    }

    loadRoom()
    loadUnit()
})