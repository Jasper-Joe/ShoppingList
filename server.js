const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

//const MongoClient = require("mongodb").MongoClient;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server started");
});
