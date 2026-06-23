const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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
        const existingUser = await User.findOne({
            email: req.body.email
        });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }
        const hashedpassword = await bcrypt.hash(
            req.body.password,
            10
        );
        const user = await User.create({
            email: req.body.email,
            password: hashedpassword
        });
        res.json(user);
    }
);

app.post(
    "/login",
    async (req, res) => {
        const user = await User.findOne({
            email: req.body.email
        });
        if (!user) {
            return res.json({ message: "User not found" });
        }
        console.log("USER:", user);
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.json({ message: "Invalid password" });
        }
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET

        );
        console.log("TOKEN CREATED");
        res.json({
            message: "Login successful",
            token: token
        });
    }
);

const PORT =
process.env.PORT || 5002;
console.log("DELETE ROUTE VERSION 123456");
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
