const db = require('../models/model');

const controller = {};

controller.getAllUserInfo = async (req, res, next) => {
  const queryText = `SELECT * FROM user_info`;
  const userInfo = await db.query(queryText);
  res.locals.userInfo = userInfo.rows;
  return next();
};

controller.getUserInfo = async (req, res, next) => {
  const { id } = req.params;
  const queryText = `SELECT * FROM user_info WHERE id=${id}`;
  const userData = await db.query(queryText);
  res.locals.userData = userData.rows[0];
  return next();
};

controller.createNewUser = async (req, res, next) => {
  try {
    const { username, password, email, name } = req.body;
    const values = [username, password, email, name];
    const queryText =
      'INSERT INTO user_info (username, password, email, name) VALUES ($1, $2, $3, $4) RETURNING *';
    const newUser = await db.query(queryText, values);
    res.locals.newUser = newUser.rows[0];
    console.log(
      'file: userController.js ~ line 20 ~ res.locals.newUser',
      res.locals.newUser
    );
    return next();
  } catch (err) {
    return next({
      log: 'Error in createNewUser: ' + err,
      status: 400,
      message: { err: 'An error occured creating new user' },
    });
  }
};

controller.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const queryText = `DELETE FROM user_info WHERE id=${id}`;
    const deletedUser = await db.query(queryText);
    if (deletedUser.rowCount === 0) {
      console.log('user does not exist');
      return res.status(400).send('User does not exist');
    }
    return next();
  } catch (err) {
    return next({
      log: 'Error in deleteUser: ' + err,
      status: 400,
      message: { err: 'Error in deleting user' },
    });
  }
};

controller.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, password, email, name } = req.body;
    const values = [username, password, email, name];
    const queryText = `UPDATE user_info SET username=$1, password=$2, email=$3, name=$4 WHERE id=${id}`;
    const updatedUser = await db.query(queryText, values);
    if (updatedUser.rowCount === 0) {
      console.log('user does not exist');
      return res.status(400).send('User does not exist');
    }
    return next();
  } catch (err) {
    return next({
      log: 'Error in updateUser: ' + err,
      status: 400,
      message: { err: 'Error in updating user' },
    });
  }
};

//middleware for user authentication
controller.verifyUser = async (req, res, next) => {
  console.log('in verify user');

  try {
    const { username, password } = req.body;
    const values = [username];
    const queryText = `SELECT * FROM user_info WHERE username=$1`;
    const verifiedUser = await db.query(queryText, values);
    console.log('verified user data: ', verifiedUser.rows[0]);
    res.locals.verifiedUser = verifiedUser.rows[0];
    if (!verifiedUser.rows[0]) return res.status(400).send('User not found');
    if (verifiedUser.rows[0].password === password){
      const userId = verifiedUser.rows[0].id;
      console.log('userid: ', userId);
      res.cookie('user_id',userId);
      return next();
    }
    else return res.status(200).send('Wrong password');
  } catch (err) {
    return next({
      log: 'Error in verifyUser, ' + err,
      status: 400,
      message: { err: 'Error in verifyUser' },
    });
  }
};
module.exports = controller;
