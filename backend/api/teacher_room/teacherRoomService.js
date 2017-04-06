const TeacherRoom = require('./teacherRoom')

TeacherRoom.methods(['get', 'post', 'put', 'delete'])
TeacherRoom.updateOptions({new: true, runValidators: true})

module.exports = TeacherRoom