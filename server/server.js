const express = require("express");
const server = express();
server.use(express.json());

const cors = require("cors");
server.use(cors());

const helmet = require("helmet");
server.use(helmet());

server.get("/api", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
