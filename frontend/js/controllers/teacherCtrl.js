angular.module('app').controller('teacherCtrl', function ($scope, $http) {
	var loadTeacher = function () {
		$http.get('http://104.131.115.44:3003/api/teachers/').then(function (response) {
			$scope.teachers = response.data
		})
	}

	$scope.addTeacher = function (teacher) {
		$http.post('http://104.131.115.44:3003/api/teachers/', teacher).then(function () {
			delete $scope.teacher
			loadTeacher()
		})
	}

	$scope.deleteTeacher = function (teacher) {
		$http.delete('http://104.131.115.44:3003/api/teachers/' + teacher._id).then(function () {
			loadTeacher()
		})
	}

	loadTeacher()
})