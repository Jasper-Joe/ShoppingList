const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

app.use(bodyParser.json());

// URI from Atlas
const db = require("./config/keys").mongoURI;

// use mongoose to connect the app to Atlas
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// map the address to items file
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server started");
});
