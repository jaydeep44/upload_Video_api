const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

const mediaRoutes = require("./routes/media");
const paymentRoutes = require("./routes/payment");


app.use("/api/v1/media", mediaRoutes);
app.use("/api/v1/payment", paymentRoutes);

app.use("/public", express.static(path.join(__dirname, "public")));

const mongodbUri = "mongodb+srv://dbUser:dbPassword@cluster0.onkep.mongodb.net/practice?retryWrites=true&w=majority";

mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongodb...");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to mongo", err);
});

app.listen(4000, () => {
  console.log("App is running on PORT 4000");
});
