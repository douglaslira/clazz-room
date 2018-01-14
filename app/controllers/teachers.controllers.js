const questionService = require("../services/question.service");

module.exports = function(io) {
  io.on("connection", function(socket) {
    questionService.publishAllQuestions(socket);

    socket.on("new-mcq-question", function(question) {
      questionService.publishMCQ(students, question)
    });

    socket.on("remove-student-question", function(id) {
      questionService.removeStudentQuestion(io, id)
    });
  });
};
