const restful = require('node-restful')
const mongoose = restful.mongoose

const teacherRoomSchema = new mongoose.Schema({
    room: {
        _id: { type: String, required: true },
        name: { type: String, require: true },
        unit: {
            _id: { type: String, required: true },
            name: { type: String, required: true }
        }
    },
    teacher: {
    	_id: { type: String, required: true },
        name: { type: String, required: true },
        matter: { type: String, required: true }
    }
})

module.exports = restful.model('TeacherRoom', teacherRoomSchema)