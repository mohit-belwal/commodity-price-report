const mongoose = require('mongoose')

const aggReportSchema = mongoose.Schema({
    cmdtyName:{
        type: String,
        required: true,},
    cmdtyID:{
        type: String,
        required: true,},
    marketID:{
        type: String,
        required: true,},
    marketName:{
        type: String,
        required: true,},
    users:[{
        type: String,
        required: true}], 
    marketType:{
        type: String},
    priceUnit:{
        type: String,
        default: 'Kg',
        required: true,},
    price:{
        type: Number,
        required: true,
        validate(value){
            if(value<0) {
                throw new Error('Price must be a positive number')
            }
        }}
}, { timestamps: true}
)

const Report = mongoose.model('Report', aggReportSchema)

module.exports = Report