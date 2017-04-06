const restful = require('node-restful')
const mongoose = restful.mongoose

const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    matter: { type: String, required: true }
})

module.exports = restful.model('Teacher', teacherSchema)