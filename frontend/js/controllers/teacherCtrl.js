angular.module('app').controller('teacherCtrl', function ($scope, $http, $stateParams) {

	var loadUnit = function () {
		$http.get('http://localhost:3003/api/units/' + $stateParams.unitId).then(function (response) {
			$scope.unit = response.data
		})
		$scope.roomIndex = $stateParams.roomIndex
	}

	var loadTeachers = function () {
		$http.get('http://localhost:3003/api/teachers/').then(function (response) {
			$scope.teachers = response.data
		})
	}

	var loadTeacherroom = function () {
		$http.get('http://localhost:3003/api/teacherrooms/').then(function (response) {
			$scope.teacherroom = {teachers: [{}]}
			$scope.teacherrooms = response.data
		})
	}

	$scope.addTeacher = function (teacher) {
		$http.post('http://localhost:3003/api/teacherrooms/', angular.extend(teacher, {unitId: $stateParams.room})).then(function () {
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
	loadTeachers()
	loadTeacherroom()
})