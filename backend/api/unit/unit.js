const restful = require('node-restful')
const mongoose = restful.mongoose

const unitSchema = new mongoose.Schema({
    name: { type: String, required: true}
})

module.exports = restful.model('Unit', unitSchema)