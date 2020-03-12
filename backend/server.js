const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());

const db = process.env.DATABASE_URI;
mongoose.connect(
  db,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  },
  () => {
    console.log(`Connected to MonogoDB successfully.`);
  }
);

app.get("/", (req, res) => res.send(`The express server is running smoothly.`));

app.listen(port, () => console.log(`App listening on port: ${port}`));
