const express = require("express");
const router = express.Router();
const Workout = require("../models/workout.js");

module.exports = function (app) {
    router.use(function timeLogger(req, res, next) {
        console.log("Time: ", Date.now());
        next();
    })

    router.get("/api/workouts", (req, res) => {
        console.log("GET!")
        Workout.find()
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    router.post("/api/workouts", (req, res) => {
        console.log("POST!")
        Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    router.put("/api/workouts/:id", ({
        body,
        params
    }, res) => {
        console.log("PUT!")
        Workout.findByIdAndUpdate(
                params.id, {
                    $push: {
                        exercises: body
                    }
                }, {
                    new: true,
                    runValidators: true
                })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    router.get("/api/workouts/range", (req, res) => {
        console.log("GETT!!")
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.json(err)
            })
    });

};