const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");

dotenv.config();
//rest object
const app = express();

//databse call
connectDb();

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//routes

//user routes
app.use("/api/v1/users", require("./routes/userRoute"));

//transection routes
app.use("/api/v1/transections", require("./routes/transectionRoutes"));

//PORT
const PORT = 8080 || process.env.PORT;

//listen
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT} `.bgCyan.white);
});
