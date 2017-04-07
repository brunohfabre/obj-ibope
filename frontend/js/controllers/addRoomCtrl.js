angular.module('app').controller('addRoomCtrl', function ($scope, $http, $stateParams) {
	unitId = $stateParams.unitId

	var loadUnit = function () {
		$http.get('http://localhost:3003/api/units/' + unitId).then(function (response) {
			$scope.unit = response.data
		})
	}

	var loadRoom = function () {
		$http.get('http://localhost:3003/api/units/').then(function (response) {
			$scope.rooms = response.data
		})
	}

	addRoom = function (room) {
		$http.put('http://localhost:3003/api/units/', unit, room).then(function () {
			loadUnit()
		})
	}

	loadUnit()
	loadRoom()
})