const express = require("express");
const server = express();

const cors = require("cors");
server.use(cors());

const helmet = require("helmet");
server.use(helmet());

server.use(express.json());

const characterRouter = require("./characters/characterRouter");
server.use("/api/characters", characterRouter);

server.get("/api", (req, res) => {
  res.status(200).json({ api: "ONLINE" });
});

module.exports = server;
