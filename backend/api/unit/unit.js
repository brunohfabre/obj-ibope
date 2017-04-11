const restful = require('node-restful')
const mongoose = restful.mongoose
// const URLSlugs = require('mongoose-url-slugs');

const roomSchema = new mongoose.Schema({
	name: { type: String, required: true }
})

const unitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rooms: [roomSchema]
})

// unitSchema.plugin(URLSlugs('name'));

module.exports = restful.model('Unit', unitSchema)