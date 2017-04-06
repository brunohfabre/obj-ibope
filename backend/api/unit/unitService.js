const Unit = require('./unit')

Unit.methods(['get', 'post', 'put', 'delete'])
Unit.updateOptions({new: true, runValidators: true})

module.exports = Unit