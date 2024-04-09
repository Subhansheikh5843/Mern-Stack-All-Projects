import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connection from "./database/db.js";
import route from "./routes/route.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

connection();

app.use("/", route);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.rainbow);
});
