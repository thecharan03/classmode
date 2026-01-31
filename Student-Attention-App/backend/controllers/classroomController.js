const Classroom = require("../models/Classroom");


// -------- CREATE CLASS --------
exports.createClass = async (req, res) => {
    try {

        const { name } = req.body;

        const newClass = new Classroom({
            name,
            teacher: req.user.id,
            classCode: Math.floor(100000 + Math.random() * 900000)
        });

        await newClass.save();

        res.json(newClass);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// -------- TEMP FUNCTIONS --------
exports.joinClass = async (req, res) => {
    try {

        const { classCode } = req.body;

        const classroom = await Classroom.findOne({ classCode });

        if (!classroom) {
            return res.status(404).json({ message: "Class not found" });
        }

        // Prevent duplicate joining
        if (classroom.students.includes(req.user.id)) {
            return res.status(400).json({ message: "Already joined class" });
        }

        classroom.students.push(req.user.id);

        await classroom.save();

        res.json({ message: "Joined class successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTeacherClasses = (req,res)=> res.send("getTeacherClasses working");
exports.getStudentClasses = (req,res)=> res.send("getStudentClasses working");
exports.startClass = (req,res)=> res.send("startClass working");
exports.endClass = (req,res)=> res.send("endClass working");
exports.generateAttendanceCode = (req,res)=> res.send("generateAttendanceCode working");
exports.markAttendance = (req,res)=> res.send("markAttendance working");
exports.postDoubt = (req,res)=> res.send("postDoubt working");
exports.answerDoubt = (req,res)=> res.send("answerDoubt working");
exports.postAnnouncement = (req,res)=> res.send("postAnnouncement working");
