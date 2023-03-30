import { NextApiRequest, NextApiResponse } from "next";

import { Server } from "socket.io";

const SocketHandler = (req: NextApiRequest, res: any) => {
  if (res.socket.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  io.on("connection", (socket) => {
    // send a message to the client
    socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });

    // receive a message from the client
    socket.on("hello from client", (...args) => {
      // ...
    });
  });

  console.log("Setting up socket");
  res.end();
};

export default SocketHandler;
