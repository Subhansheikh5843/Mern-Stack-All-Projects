import express from "express";
import http from "http";
import { Server } from "socket.io";
import sockets from "./socket/routes.js";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});
// await mongoose.connect(
//   "mongodb+srv://subhansheikh76:subhansheikh76@cluster0.ccmnyzd.mongodb.net/Mern-socket"
// );
const PORT = 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", sockets);

httpServer.listen(PORT, () => {
  console.log("server is running on port at http");
});
