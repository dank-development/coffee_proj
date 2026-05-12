require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const agentRouter = require("./routes/agent");

const logger = (req, res, next) => {
  console.log(req.method, req.path);
  next();
};

app.use(
  cors({
    origin: [
      "http://localhost:4000",
      "http://localhost:5173",
      "http://127.0.0.1:4000",
      "http://127.0.0.1:5173",
      "http://coffee.magnushome.xyz",
      "https://coffee.magnushome.xyz",
    ],
  }),
);

app.use(logger);
app.use(express.json());
app.use("/api/agent", agentRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
