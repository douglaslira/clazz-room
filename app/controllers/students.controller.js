const questionService = require("../services/question.service");

module.exports = function(io) {
  io.on("connection", function(socket) {
    socket.on("new-student-question", function(question) {
      questionService.publishStudentQuestion(io, question);
    });
  });
};
