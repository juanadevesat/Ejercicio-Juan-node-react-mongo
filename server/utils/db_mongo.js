const mongoose = require("mongoose");
require('dotenv').config();
mongoose.set('strictQuery', true);

const url = "mongodb+srv://juanadevesat93:rTTxVd4YlhXdBIO9@cluster-juan.tpeqodt.mongodb.net/";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to Mongodb established :)"));

module.exports = mongoose;