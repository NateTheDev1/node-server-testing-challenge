const express = require("express");
const server = express();

const helmet = require("helmet");
server.use(helmet());

server.use(express.json());

const cors = require("cors");
server.use(cors());

server.get("/api", (req, res) => {
  res.status(200).json({ api: "ONLINE" });
});

module.exports = server;
