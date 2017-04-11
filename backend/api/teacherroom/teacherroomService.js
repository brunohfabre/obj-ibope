const Teacherroom = require('./teacherroom')

Teacherroom.methods(['get', 'post', 'put', 'delete'])
Teacherroom.updateOptions({new: true, runValidators: true})

module.exports = Teacherroom