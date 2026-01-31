const mongoose = require("mongoose");

const classroomSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true
  },

  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  classCode: {
    type: String,
    unique: true
  },

  attendanceCode: String,

  students: [
    {
      student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      joinedAt: {
        type: Date,
        default: Date.now
      }
    }
  ],

  attendance: [
    {
      student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      time: {
        type: Date,
        default: Date.now
      }
    }
  ],

  announcements: [
    {
      message: String,
      time: {
        type: Date,
        default: Date.now
      }
    }
  ],

  doubts: [
    {
      question: String,
      answer: String,
      time: {
        type: Date,
        default: Date.now
      }
    }
  ],

  timetable: [
    {
      day: String,
      subject: String,
      time: String
    }
  ]
});

module.exports = mongoose.model("Classroom", classroomSchema);


