import { useEffect } from "react";
import { io } from "socket.io-client";

const Home = () => {
  useEffect(() => {
    fetch("/api/socket");

    const socket = io();

    socket.emit("hello from client", 5, "6", { 7: Uint8Array.from([8]) });

    // receive a message from the server
    socket.on("hello from server", (...args) => {
      // ...
    });
  }, []);

  return <h1>Hello</h1>;
};

export default Home;
