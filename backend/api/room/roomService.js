const Room = require('./room')

Room.methods(['get', 'post', 'put', 'delete'])
Room.updateOptions({new: true, runValidators: true})

module.exports = Room