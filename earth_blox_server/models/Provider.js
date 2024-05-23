const mongoose = require('mongoose');

const ProviderSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const ProviderModel = mongoose.model("providers", ProviderSchema);
module.exports = ProviderModel