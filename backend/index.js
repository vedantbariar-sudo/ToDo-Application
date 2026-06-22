require("dotenv").config();
console.log("VEDANT BACKEND FILE STARTED");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: String
});

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const Task = mongoose.model("Task", taskSchema);
const User = mongoose.model("User", userSchema);
mongoose.connect(
    process.env.MONGO_URI
);
console.log("MongoDB connection requested");

const app = express();
app.use(cors());
app.use(express.json());
app.get("/hello", (req, res) => {
    console.log("HELLO ROUTE HIT");
    res.send("HELLO FROM BACKEND");
});
app.get(
    "/tasks",
    async (req, res) => {
        const data = await Task.find();

        res.json(data);
    }
);
app.post(
    "/tasks",
    async (req, res) => {

        console.log("BODY:", req.body);

        await Task.create({
            task: req.body.task
        });

        const data = await Task.find();

        console.log("DATA:", data);

        res.json(data);
    }
);
app.delete(
    "/tasks",
    async (req, res) => {

        console.log("BODY:", req.body);

        const result = await Task.deleteOne({
            _id: req.body.id
        });

        console.log("RESULT:", result);

        const data = await Task.find();

        res.json(data);
    }
);

app.post(
    "/register",
    async (req, res) => {
        console.log(req.body);
        const user = await User.create({
            email: req.body.email,
            password: req.body.password
        });
        res.json(user);
    }
);
const PORT =
process.env.PORT || 5002;
console.log("DELETE ROUTE VERSION 123456");
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
