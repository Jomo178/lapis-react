import { NextApiRequest, NextApiResponse } from "next";
import WebSocket from "ws";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // create a new WebSocket server
  const wss = new WebSocket.Server({ noServer: true });

  console.log(wss);

  // handle the WebSocket connection
  wss.on("connection", (ws: WebSocket) => {
    console.log("Client connected");

    // handle incoming messages
    ws.on("message", (message: string) => {
      console.log(`Received message: ${message}`);

      // send a response back to the client
      ws.send(`You sent: ${message}`);
    });

    // handle the WebSocket disconnection
    ws.on("close", () => {
      console.log("Client disconnected");
    });
  });

  // upgrade the HTTP request to a WebSocket connection
  wss.handleUpgrade(req, req.socket, Buffer.alloc(0), (ws) => {
    wss.emit("connection", ws, req);
  });
}
