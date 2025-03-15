const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String },
    googleId: { type: String }
});

module.exports = mongoose.model("Admin", AdminSchema);
