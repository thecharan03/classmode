const express = require("express");
const router = express.Router();

const {
    createClass,
    joinClass,
    getTeacherClasses,
    getStudentClasses,
    startClass,
    endClass,
    generateAttendanceCode,
    markAttendance,
    postDoubt,
    answerDoubt,
    postAnnouncement
} = require("../controllers/classroomController");

const auth = require("../middleware/authMiddleware");


// -------- CLASS MANAGEMENT --------
router.post("/create", auth, createClass);
router.post("/join", auth, joinClass);
router.get("/teacher", auth, getTeacherClasses);
router.get("/student", auth, getStudentClasses);


// -------- CLASS CONTROL --------
router.post("/:id/start", auth, startClass);
router.post("/:id/end", auth, endClass);


// -------- ATTENDANCE --------
router.post("/attendance/generate/:id", auth, generateAttendanceCode);
router.post("/attendance/mark", auth, markAttendance);


// -------- DOUBTS --------
router.post("/doubt", auth, postDoubt);
router.post("/doubt/answer", auth, answerDoubt);


// -------- ANNOUNCEMENTS --------
router.post("/announcement", auth, postAnnouncement);


module.exports = router;
