const mongoose = require("mongoose");

let mongo_URL = process.env.DB_URL;
console.log("mongo_URL : ", mongo_URL);
mongoose.connect(mongo_URL);
