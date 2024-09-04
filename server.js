const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");



//connect to mongodb

mongoose
  .connect(
    "mongodb+srv://repon7253:OylZKphom5QiRzHp@cluster0.ejv2y.mongodb.net/"
  )
  .then(() => console.log("Mongodb connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173/",
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

app.listen(PORT, () =>
  console.log(`server is now running on http://localhost:${PORT}`)
);

