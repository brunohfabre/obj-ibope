const restful = require('node-restful')
const mongoose = restful.mongoose
//const URLSlugs = require('mongoose-url-slugs');

const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    matter: { type: String, required: true }
})

//teacherSchema.plugin(URLSlugs('name'));

module.exports = restful.model('Teacher', teacherSchema)