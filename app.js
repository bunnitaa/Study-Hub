const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/groups", require("./routes/studyGroupRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));

module.exports = app;