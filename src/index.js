const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config()
const observationsRouter = require("./routes/observationRoutes");

const app = express();
app.use(cors());

app.use("/api/observations", observationsRouter);

const port = process.env.PORT || 8000;

const listener = app.listen(port, () => {
  console.log(`Server started at port ${listener.address().port}`);
});
