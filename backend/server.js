require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const passport = require("passport");
const session = require("express-session");

connectDB();
const app = express();
app.use(express.json());
app.use(cors());

// Passport session
app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/students", require("./routes/studentRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
