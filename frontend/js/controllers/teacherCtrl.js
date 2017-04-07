angular.module('app').controller('teacherCtrl', function ($scope, $http) {
	var loadTeacher = function () {
		$http.get('http://localhost:3003/api/teachers/').then(function (response) {
			$scope.teachers = response.data
		})
	}

	$scope.addTeacher = function (teacher) {
		$http.post('http://localhost:3003/api/teachers/', teacher).then(function () {
			delete $scope.teacher
			loadTeacher()
		})
	}

	$scope.deleteTeacher = function (teacher) {
		$http.delete('http://localhost:3003/api/teachers/' + teacher._id).then(function () {
			loadTeacher()
		})
	}

	loadTeacher()
})