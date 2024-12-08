const mongoose = require('mongoose');


// Define a new schema for our model
const helloSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Hello",helloSchema);