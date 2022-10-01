const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

//get method for user_info
router.get('/', controller.getAllUserInfo, (req, res) => {
  res.status(200).json(res.locals.userData);
});

router.post('/', controller.createNewUser, (req, res) => {
  res.status(200).json(res.locals.newUser);
});

router.put('/:id', controller.updateUser, (req, res) => {
  res.status(200).send('User updated');
});

router.delete('/:id', controller.deleteUser, (req, res) => {
  res.status(200).send('User deleted');
});

module.exports = router;
