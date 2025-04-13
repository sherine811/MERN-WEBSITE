const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const UserModel = require("./User"); // Import the User model

const app = express();
const PORT = 9000;

// Middleware
app.use(cors()); // Enables API calls from frontend
app.use(bodyParser.json()); // Parses JSON request body

// Connect to MongoDB database
mongoose
    .connect("mongodb://127.0.0.1:27017/Company", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));

// API Route to Register User
app.post("/register", (req, res) => {
    UserModel.create(req.body)
        .then(() => res.json("Data Saved Successfully"))
        .catch((err) => res.json(err));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
