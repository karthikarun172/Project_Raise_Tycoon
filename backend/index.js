const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const Application = require("./routes/FreelanceRoutes");
const PostaJob = require("./routes/PostaJobRoute");
const BidDetails = require("./routes/BidRoutes");
const Images = require("./routes/TrainRoutes");

mongoose
  .connect("mongodb://localhost/RaiseTicoon")
  .then(() => console.log("connceted to the DataBase"))
  .catch(er => console.log("not connected to the DataBase", er));

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use("/api/application", Application);
app.use("/api/postaJob", PostaJob);
app.use("/api/BidDetails", BidDetails);
app.use("/api/images", Images);

const port = process.env.PORT || 12000;
app.listen(port, () => console.log(`listening to port ${port}`));
