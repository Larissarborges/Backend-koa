const mongoose = require('mongoose')
const { Schema } = mongoose

const assetsSchema = new Schema({
    image: 'string',
    name: 'string',
    description: 'string',
    model: 'string',
    responsableId: 'string',
    status: 'string',
    healthScore: 'number',
    branchId: 'string',
})

const Assets = mongoose.model('Assets', assetsSchema)

module.exports = Assets