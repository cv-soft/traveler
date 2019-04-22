const mongoose = require('mongoose');

const travelsSchema = mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String
});

module.exports = mongoose.model("Travels", travelsSchema);