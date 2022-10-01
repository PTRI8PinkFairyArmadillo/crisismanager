const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getAllUserInfo, (req, res) => {
  res.status(200).json(res.locals.userData);
});

router.post('/', userController.createNewUser, (req, res) => {
  res.status(200).json(res.locals.newUser);
});

router.put('/:id', userController.updateUser, (req, res) => {
  res.status(200).send('User updated');
});

router.delete('/:id', userController.deleteUser, (req, res) => {
  res.status(200).send('User deleted');
});

router.post('/login', userController.verifyUser, (req, res) => {
  res.status(200).send('User found');
});

module.exports = router;
