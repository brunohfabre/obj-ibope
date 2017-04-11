angular.module('app').controller('teacherRoomCtrl', function ($scope, $http, $stateParams) {
	var loadTeacherRoom = function () {
		$http.get('http://localhost:3003/api/teacherrooms/').then(function (response) {
			$scope.teacherroom = {teachers: [{}]}
			$scope.teacherrooms = response.data
		})
	}

	var loadTeacher = function () {
		$http.get('http://localhost:3003/api/teachers/').then(function (response) {
			$scope.testes = response.data
		})
	}

	var loadRoom = function () {
		$http.get('http://localhost:3003/api/rooms/').then(function (response) {
			$scope.rooms = response.data
		})
	}

	$scope.addTeacherRoom = function (teacherroom) {
		$http.post('http://localhost:3003/api/teacherrooms/', angular.extend(teacherroom, {unitId: $stateParams.unitId, roomId: $stateParams.roomId})).then(function () {
			delete $scope.teacherroom
			loadTeacherRoom()
		})
	}

	$scope.deleteTeacherRoom = function (teacherroom) {
		$http.delete('http://localhost:3003/api/teacherrooms/' + teacherroom._id).then(function () {
			loadTeacherRoom()
		})
	}

	$scope.addTeacher = function (index) {
		$scope.teacherroom.teachers.splice(index + 1, 0, {})
	}

	$scope.deleteTeacher = function (index) {
		if ($scope.teacherroom.teachers.length > 1) {
			$scope.teacherroom.teachers.splice(index, 1)
		}
	}

	loadTeacherRoom()
	loadTeacher()
	loadRoom()
})