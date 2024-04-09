import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import DBConnection from "./database/db.js";
import router from "./routes/routes.js";
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());
DBConnection();
app.use("/", router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
