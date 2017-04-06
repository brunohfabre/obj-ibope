angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	//$locationProvider.html5Mode(true)

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html'
		})

		.state('unit', {
			url: '/unit',
			templateUrl: 'views/unit.html',
			controller: 'unitCtrl'
		})

		.state('teacher', {
			url: '/teacher',
			templateUrl: 'views/teacher.html',
			controller: 'teacherCtrl'
		})

		.state('room', {
			url: '/room',
			templateUrl: 'views/room.html',
			controller: 'roomCtrl'
		})

		.state('teacherroom', {
			url: '/teacherroom',
			templateUrl: 'views/teacherroom.html'
		})

		$urlRouterProvider.otherwise('/home')
})