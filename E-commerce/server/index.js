const express = require("express");
require('dotenv').config()
require('./models/db')
const cors = require("cors");
const userModel = require("./models/user");
const userRouter = require('./routes/user')

const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running perfectly on port : ${PORT}`);
});