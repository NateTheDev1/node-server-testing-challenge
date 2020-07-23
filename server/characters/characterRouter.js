const router = require("express").Router();
const db = require("./characterDB");

router.get("/", (req, res) => {
  db.find()
    .then((characters) => {
      res.status(200).json({ data: characters });
    })
    .catch((err) => {
      res.status(500).json({ error: err, message: "Someting Went Wrong " });
    });
});

router.post("/", (req, res) => {
  db.create(req.body)
    .then((res) => {
      res.status(201).json({ data: res });
    })
    .catch((err) => {
      res.status(500).json({ error: err, message: "Someting Went Wrong " });
    });
});

router.delete("/name", (req, res) => {
  db.remove(req.params.name)
    .then((res) => {
      res.status(203).json({ data: res });
    })
    .catch((err) => {
      res.status(500).json({ error: err, message: "Someting Went Wrong " });
    });
});

module.exports = router;
