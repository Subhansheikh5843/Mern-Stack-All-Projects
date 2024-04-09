const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const { errorHandler } = require("./middlewares/errorMiddleware");
const usersRoutes = require("./routes/UsersRoutes");
const products = require("../frontend/src/products");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoute");

const connectDb = require("./config/config");
const app = express();
dotenv.config();
app.use(express.json());

app.use(cors());

//connection
connectDb();

app.get("/", (req, res) => {
  res.send("<h1>Wellcome to node server</h1>");
});

app.use("/api", productRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});
app.use(errorHandler);
const PORT = 8080;

app.listen(process.env.PORT || PORT, () => {
  console.log(
    `server running in ${process.env.NODE_ENV} mode on  port ${process.env.PORT}`
      .underline.inverse
  );
});
