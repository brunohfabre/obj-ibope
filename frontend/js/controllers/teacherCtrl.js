angular.module('app').controller('teacherCtrl', function ($scope, $http, $stateParams) {

	$scope.roomIndex = $stateParams.roomIndex

	var loadUnit = function () {
		$http.get('http://localhost:3003/api/units/' + $stateParams.unitId).then(function (response) {
			$scope.unit = {rooms: [{}], teachers: [{}]}
			$scope.unit = response.data
		})
	}

	$scope.addTeacher = function (index) {
        $scope.unit.rooms[$stateParams.roomIndex].teachers.splice(index + 1, 0, {})
    }

    $scope.deleteTeacher = function (index) {
        if ($scope.unit.rooms[$stateParams.roomIndex].teachers.length > 1) {
            $scope.unit.rooms[$stateParams.roomIndex].teachers.splice(index, 1)
        }
    }

	loadUnit()
})