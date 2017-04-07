angular.module('app').controller('teacherRoomCtrl', function ($scope, $http) {
	var loadTeacherRoom = function () {
		$http.get('http://localhost:3003/api/teacherrooms/').then(function (response) {
			$scope.teacherrooms = response.data
		})
	}

	var loadTeacher = function () {
		$http.get('http://localhost:3003/api/teachers/').then(function (response) {
			$scope.teachers = response.data
		})
	}

	var loadRoom = function () {
		$http.get('http://localhost:3003/api/rooms/').then(function (response) {
			$scope.rooms = response.data
		})
	}

	$scope.addTeacherRoom = function (teacherroom) {
		$http.post('http://localhost:3003/api/teacherrooms/', teacherroom).then(function () {
			delete $scope.teacherroom
			loadTeacherRoom()
		})
	}

	$scope.deleteTeacherRoom = function (teacherroom) {
		$http.delete('http://localhost:3003/api/teacherrooms/' + teacherroom._id).then(function () {
			loadTeacherRoom()
		})
	}

	loadTeacherRoom()
	loadTeacher()
	loadRoom()
})