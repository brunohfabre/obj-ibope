const restful = require('node-restful')
const mongoose = restful.mongoose
// const URLSlugs = require('mongoose-url-slugs');

const teacherSchema = new mongoose.Schema({
	name: { type: String, required: true },
	matter: { type: String, required: true }
})

const roomSchema = new mongoose.Schema({
	name: { type: String, required: true },
	teachers: [teacherSchema]
})

const unitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rooms: [roomSchema]
})

// unitSchema.plugin(URLSlugs('name'));

module.exports = restful.model('Unit', unitSchema)