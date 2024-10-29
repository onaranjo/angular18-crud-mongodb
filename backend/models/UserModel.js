const mongoose = require('mongoose');

const usersChema = new mongoose.Schema({
    firstName: String,
    lastName: String,
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