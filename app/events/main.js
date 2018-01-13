module.exports = function(io) {
  io.on("connection", function(socket) {
    console.log("a user connected");

    socket.on("disconnect", function() {
      console.log("user disconnected");
    });

    socket.on("question/publish", function(question) {
      socket.broadcast.emit('question/added', question);
    });
  });
};
