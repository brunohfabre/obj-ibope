angular.module('app').controller('unitCtrl', function ($scope, $http) {
	var loadUnit = function () {
		$http.get('http://localhost:3003/api/units/').then(function (response) {
			$scope.unit = {rooms: [{}]}
			$scope.units = response.data
		})
	}

	$scope.addUnit = function (unit) {
		$http.post('http://localhost:3003/api/units/', unit).then(function () {
			delete $scope.unit
			loadUnit()
		})
	}

	$scope.deleteUnit = function (unit) {
		$http.delete('http://localhost:3003/api/units/' + unit._id).then(function () {
			loadUnit()
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

	loadUnit()
})