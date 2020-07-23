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

module.exports = router;
