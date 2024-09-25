const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-route")
const adminProductsRouter = require("./routes/admin/products-router")
const shopProductsRouter = require("./routes/shop/products-routes")


//connect to mongodb

// "mongodb+srv://repon7253:OylZKphom5QiRzHp@cluster0.ejv2y.mongodb.net/"
mongoose
  .connect(
    "mongodb://localhost:27017/"
  )
  .then(() => console.log("Mongodb connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);


app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter)
app.use("/api/shop/products",shopProductsRouter)

app.listen(PORT, () =>
  console.log(`server is now running on http://localhost:${PORT}`)
);

