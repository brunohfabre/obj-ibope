const express = require('express')

module.exports = function(server) {

	// API Routes
	const router = express.Router()
	server.use('/api', router)
	
	// Unit
	const unitService = require('../api/unit/unitService')
	unitService.register(router, '/units')

	// Room
	const roomService = require('../api/room/roomService')
	roomService.register(router, '/rooms')

	// Teacher
	const teacherService = require('../api/teacher/teacherService')
	teacherService.register(router, '/teachers')

	// Teacher
	const teacherroomService = require('../api/teacherroom/teacherroomService')
	teacherroomService.register(router, '/teacherrooms')
}