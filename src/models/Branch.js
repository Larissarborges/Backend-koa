const mongoose  = require('mongoose')
const { Schema } = mongoose;

const branchSchema = new Schema({
    name: 'string',
    companyId: 'string',
    assets: 'array'
})

const Branch = mongoose.model('Branch', branchSchema)

module.exports = Branch

