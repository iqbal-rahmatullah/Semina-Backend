const mongoose = require('mongoose')
const { model, Schema } = mongoose

const categorySchema = Schema({
    name: {
        type: "string",
        minlength: [3, "The character must be greater than 3"],
        maxLength: [20, "Maximum character is 20"],
        required: [true, "The fill is required"],
    }
},
    { timestamps: true })

module.exports = model("Category", categorySchema)