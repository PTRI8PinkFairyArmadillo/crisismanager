const express = require("express");
const postController = require("../controllers/postController");
const itemController = require("../controllers/itemController");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/", itemController.newItem, (req, res) => {
  return res.status(200).json(res.locals.newItem);
});

module.exports = router;
