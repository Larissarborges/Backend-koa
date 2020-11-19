const { Schema } = require("mongoose");

const mongoose = require('mongoose')
// const { Schema } = mongoose

const companySchema = new Schema({
    name: 'string'
})

const Company = mongoose.model('Company', companySchema)

module.exports = Company

