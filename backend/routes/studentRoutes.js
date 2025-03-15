const express = require("express");
const Student = require("../models/Student");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create Student
router.post("/", authMiddleware, async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
});

// Get All Students
router.get("/", authMiddleware, async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

// Update Student
router.put("/:id", authMiddleware, async (req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(student);
});

// Delete Student
router.delete("/:id", authMiddleware, async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
});

module.exports = router;
