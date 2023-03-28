import { useEffect } from "react";

function WebSocketComponent() {
  useEffect(() => {
    setTimeout(() => {
      // create a new WebSocket instance
      const socket = new WebSocket(
        "wss://jomo178-potential-umbrella-7x7q7rprxwxfpqwq-3000.preview.app.github.dev/api/hello"
      );

      // event listener for when the connection is established
      socket.onopen = () => {
        console.log("WebSocket connected");
      };

      // event listener for incoming messages
      socket.onmessage = (event) => {
        console.log("WebSocket message received: ", event.data);
      };

      // event listener for errors
      socket.onerror = (error) => {
        console.error("WebSocket error: ", error);
      };

      // event listener for when the connection is closed
      socket.onclose = () => {
        console.log("WebSocket disconnected");
      };

      // clean up the WebSocket connection when the component is unmounted
      return () => {
        socket.close();
      };
    }, 1000); // wait for 1 second before creating the WebSocket instance
  }, []);

  return <div>WebSocket Component</div>;
}

export default WebSocketComponent;
