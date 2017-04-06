const Teacher = require('./teacher')

Teacher.methods(['get', 'post', 'put', 'delete'])
Teacher.updateOptions({new: true, runValidators: true})

module.exports = Teacher