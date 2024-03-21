//import mongoose to create schema
const mongoose = require('mongoose');

//creating schema object using mongoose
const Schema = mongoose.Schema;

//defining schema for note collection
const noteSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        requite: true
    },
    color: {
        type: String,
        require: false,
        default: "white"
    },
    category: {
        type: String,
        require: true
    }
}, { timestamps: true });

//export schema
module.exports = mongoose.model('Note', noteSchema);