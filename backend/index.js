// External Module
const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/routes");

// local modules

// configurations
const PORT = process.env.PORT || 3002;
const mongoURI = process.env.MONGO_URI;

const app = express();

// Middlewear
app.use(
  cors({
    origin: [
      "http://localhost:3002",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connection
mongoose
  .connect(mongoURI)
  .then(() => console.log("Mongoose connected"))
  .catch((err) => console.log("Mongoose error ", err));

// Api
app.use("/api", router);
// page not found
app.use((req, res) => {
  res.send("Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
