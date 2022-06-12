import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://docker:mongopw@localhost:49153", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => {
  res.send(`Node and express server running on port ${PORT}`);
});

//serving static files

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
