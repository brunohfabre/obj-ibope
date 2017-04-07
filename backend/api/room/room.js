const restful = require('node-restful')
const mongoose = restful.mongoose
//const URLSlugs = require('mongoose-url-slugs');

const roomSchema = new mongoose.Schema({
    name: { type: String, required: true },
    unit: {
    	_id: { type: String, required: true },
    	name: { type: String, required: true }
    }
})

//teacherSchema.plugin(URLSlugs('name'));

module.exports = restful.model('Room', roomSchema)