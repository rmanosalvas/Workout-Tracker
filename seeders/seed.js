let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let workoutSeed = [{
    day: new Date().setDate(new Date().getDate() - 9),
    exercises: [{
      type: "resistance",
      name: "Bicep Curl",
      duration: 20,
      weight: 45,
      reps: 12,
      sets: 4
    }]
  },
  {
    day: new Date().setDate(new Date().getDate() - 8),
    exercises: [{
      type: "resistance",
      name: "Push Press",
      duration: 25,
      weight: 185,
      reps: 6,
      sets: 4
    }]
  },
  {
    day: new Date().setDate(new Date().getDate() - 7),
    exercises: [{
      type: "resistance",
      name: "Lat Pull",
      duration: 20,
      weight: 150,
      reps: 8,
      sets: 4
    }]
  },
  {
    day: new Date().setDate(new Date().getDate() - 6),
    exercises: [{
      type: "cardio",
      name: "Running",
      duration: 45,
      distance: 4
    }]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 5)),
    exercises: [{
      type: "resistance",
      name: "Quad Extension",
      duration: 30,
      weight: 300,
      reps: 10,
      sets: 4
    }]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [{
      type: "resistance",
      name: "Hamstring Curl",
      duration: 20,
      weight: 120,
      reps: 6,
      sets: 4
    }]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    exercises: [{
      type: "resistance",
      name: "Bench Press",
      duration: 20,
      weight: 300,
      reps: 10,
      sets: 4
    }]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercises: [{
      type: "resistance",
      name: "Military Press",
      duration: 20,
      weight: 60,
      reps: 6,
      sets: 4
    }]
  },
  {
    day: new Date().setDate(new Date().getDate() - 1),
    exercises: [{
      type: "resistance",
      name: "Bench Press",
      duration: 20,
      weight: 215,
      reps: 4,
      sets: 4
    }]
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + "********");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });