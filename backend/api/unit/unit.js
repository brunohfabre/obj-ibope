const restful = require('node-restful')
const mongoose = restful.mongoose
// const URLSlugs = require('mongoose-url-slugs');

const unitSchema = new mongoose.Schema({
    name: { type: String, required: true}
})

// unitSchema.plugin(URLSlugs('name'));

module.exports = restful.model('Unit', unitSchema)