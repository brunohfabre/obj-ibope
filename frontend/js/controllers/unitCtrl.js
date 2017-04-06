angular.module('app').controller('unitCtrl', function ($scope, $http) {
	var loadUnit = function () {
		$http.get('http://104.131.115.44:3003/api/units/').then(function (response) {
			$scope.units = response.data
		})
	}

	$scope.addUnit = function (unit) {
		$http.post('http://104.131.115.44:3003/api/units/', unit).then(function () {
			delete $scope.unit
			loadUnit()
		})
	}

	$scope.deleteUnit = function (unit) {
		$http.delete('http://104.131.115.44:3003/api/units/' + unit._id).then(function () {
			loadUnit()
		})
	}

	loadUnit()
})