import TypingController from "./controllers/TypingController.js";
import RoomController from "./controllers/RoomController.js";
import MessageController from "./controllers/MessageController.js";

const sockets = (socket) => {
  const typingController = new TypingController(socket);
  const roomController = new RoomController(socket);
  const messageController = new MessageController(socket);
  socket.on("send-message", messageController.sendMessage);
  socket.on("typing-started", typingController.typingStarted);
  socket.on("typing-stoped", typingController.typingStoped);
  // socket.on("join-room", roomController.joinRoom);
  // socket.on('new-room-created', roomController.newRoomCreated );

  socket.on("disconnect", (socket) => {
    console.log("User left.");
  });
};

export default sockets;
