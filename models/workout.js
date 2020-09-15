const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Workout = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercise: [{
        type: {
            type: String,
            trim: true,
            required: "Please choose our exercise type."
        },
        name: {
            type: String,
            trim: true,
            required: "Please enter exercise name."
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        weight: {
            type: Number
        },
        duration: {
            type: Number
        },

    }]
})