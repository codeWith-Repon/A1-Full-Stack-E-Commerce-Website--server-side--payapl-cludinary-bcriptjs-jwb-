const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-route")
const adminProductsRouter = require("./routes/admin/products-router")
const adminOrdersRouter = require("./routes/admin/order-router")
const shopProductsRouter = require("./routes/shop/products-routes")
const shopCartRouter = require("./routes/shop/cart-routes")
const shopAddressRouter = require("./routes/shop/address-routes")
const shopOrderRouter = require("./routes/shop/order-routes")
const shopSearchRouter = require("./routes/shop/search-routes")
const shopReviewRouter = require("./routes/shop/review-router")

const commonFeatureRouter = require("./routes/common/feature-routes")


//connect to mongodb

// "mongodb+srv://repon7253:OylZKphom5QiRzHp@cluster0.ejv2y.mongodb.net/"
mongoose
  .connect(
    "mongodb+srv://repon:repon123@cluster0.0b6cd.mongodb.net/"
  )
  .then(() => console.log("Mongodb connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5174",
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
app.use("/api/admin/orders", adminOrdersRouter)

app.use("/api/shop/products",shopProductsRouter)
app.use("/api/shop/cart",shopCartRouter)
app.use("/api/shop/address",shopAddressRouter)
app.use("/api/shop/order",shopOrderRouter)
app.use("/api/shop/search", shopSearchRouter)
app.use("/api/shop/review", shopReviewRouter)

app.use("/api/common/feature", commonFeatureRouter)

app.listen(PORT, () =>
  console.log(`server is now running on http://localhost:${PORT}`)
);

