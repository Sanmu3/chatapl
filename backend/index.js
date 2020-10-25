const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;

io.on("connection", (socket) => {
  console.log("a user connected :D");
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(port, () => console.log("sercer running on port:" + port));
