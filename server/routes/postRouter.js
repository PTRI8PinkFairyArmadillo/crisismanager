const express = require('express');
const postController = require('../controllers/postController');
const userController = require('../controllers/userController');
const itemController = require('../controllers/itemController');

const router = express.Router();

router.post(
  '/',
  // userController.verifyUser,
  itemController.newItem,
  postController.newPost,
  (req, res) => {
    return res.status(200).json(res.locals.newPost);
  }
);

router.get('/', postController.getAllPosts, (req, res) => {
  return res.status(200).json(res.locals.allPosts);
});

module.exports = router;
