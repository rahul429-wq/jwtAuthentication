const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
dotenv.config();

//! connectdb

mongoose.connect(process.env.DB_CONNECT, { usenewUrlParser: true }, () => {
  console.log("connected to db");
});

//! middleware
app.use(express.json());
app.use("/api/user", authRoute);
app.use("/api/post", postRoute);
app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`)
);
