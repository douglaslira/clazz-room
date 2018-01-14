const teacherController = require("../controllers/teachers.controllers");
const studentController = require("../controllers/students.controller");

module.exports = function(io) {
  io.on("connection", function(socket) {
    console.log("a user connected");

    socket.on("disconnect", function() {
      console.log("user disconnected");
    });
  });

  teacherController(io);
  studentController(io);
};
