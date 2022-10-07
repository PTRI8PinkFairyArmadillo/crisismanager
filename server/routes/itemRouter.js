const express = require('express');
const postController = require('../controllers/postController');
const itemController = require('../controllers/itemController');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', itemController.getAllItems, (req, res) => {
  res.status(200).json(res.locals.allItems);
});

router.get('/:id', itemController.getItem, (req, res) => {
  res.status(200).json(res.locals.itemData);
});

router.post('/', itemController.newItem, (req, res) => {
  return res.status(200).json(res.locals.newItem);
});

router.delete('/', itemController.deleteAllItems, (req, res) => {
  res.status(200).json(res.locals.allItems);
});

router.delete('/:id', itemController.deleteItemOLD, (req, res) => {
  res.status(200).send('Item deleted');
});

router.put('/:id', itemController.updateItem, (req, res) => {
  res.status(200).send('Item updated');
});

module.exports = router;
