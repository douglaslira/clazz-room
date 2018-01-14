const questions = [];

const publishAllQuestions = function(socket) {
  socket.emit('all-questions-sent', questions);
}

const publishStudentQuestion = function(io, question) {
  questions.push(question);
  io.emit("student-question-published", question);
};

const removeStudentQuestion = function(io, id) {
  const filtered = questions.filter(question => question.id === id);
  if (filtered && filtered.length > 0) {
    const index = questions.indexOf(filtered[0]);
    if (index > -1) {
        questions.splice(index, 1)
    }
  }

  io.emit("student-question-removed", id)
};

module.exports = {
  publishAllQuestions: publishAllQuestions,
  publishStudentQuestion: publishStudentQuestion,
  removeStudentQuestion: removeStudentQuestion
};
