const mongoose = require('mongoose');

const usersChema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    contact: Number,
    age: Number,
    gender: String,
    skill: String,
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', usersChema);