angular.module('app').controller('teacherCtrl', function ($scope, $http, $stateParams) {

	var loadUnit = function () {
		$http.get('http://localhost:3003/api/units/' + $stateParams.unitId).then(function (response) {
			$scope.unit = {rooms: [{}]}
			$scope.unit = response.data
			
		})
		$scope.roomIndex = $stateParams.roomIndex
	}

	$scope.addTeacher = function (teacher) {
		$http.post('http://localhost:3003/api/teachers/', angular.extend(teacher, {room_id: $stateParams.room})).then(function () {
			delete $scope.teacher
			loadTeacher()
		})
	}

	$scope.deleteTeacher = function (teacher) {
		$http.delete('http://localhost:3003/api/teachers/' + teacher._id).then(function () {
			loadTeacher()
		})
	}

	loadUnit()
})