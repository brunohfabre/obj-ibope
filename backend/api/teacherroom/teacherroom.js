const restful = require('node-restful')
const mongoose = restful.mongoose
//const URLSlugs = require('mongoose-url-slugs');

const teacherroomSchema = new mongoose.Schema({
	unitId: { type: String, required: true },
	roomId: { type: String, required: true },
	teachers: [
		{
			name: { type: String, required: true },
			matter: { type: String, required: true }
		}
	]
    
})

//teacherSchema.plugin(URLSlugs('name'));

module.exports = restful.model('Teacherroom', teacherroomSchema)