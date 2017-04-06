const restful = require('node-restful')
const mongoose = restful.mongoose

const roomSchema = new mongoose.Schema({
    name: { type: String, required: true },
    unit: {
    	_id: { type: String, required: true },
        name: { type: String, required: true }
    },
    teacher: {
    	_id: { type: String, required: true },
        name: { type: String, required: true },
        matter: { type: String, required: true }
    }
})

module.exports = restful.model('Room', roomSchema)