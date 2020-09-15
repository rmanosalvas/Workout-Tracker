const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});