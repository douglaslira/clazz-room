const express = require("express");
const path = require("path");
const ioInit = require("./app/controllers/main");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const host = process.env.HOST || "http://localhost";
const port = +process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`server is listening on ${host}:${port}`);
});

app.use(express.static(path.join(__dirname, "public")));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

io.set("origins", "*:*");
ioInit(io);
