const db = require('../models/model');

const controller = {};

controller.newPost = async (req, res, next) => {
  try {
    console.log('in newPost');
    const date = new Date();
    const currentDate =
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    const { location, event, donation, description } = req.body;
    //use JWT to get user_id
    //maybe create a middleware to verify the user and get user_id
    console.log(res.locals.verifiedUser);

    const userID = res.locals.verifiedUser.id;
    console.log('User id: ', res.locals.verifiedUser.id);
    const itemID = res.locals.newItem.id;
    const postValues = [
      currentDate,
      location,
      event,
      donation,
      description,
      itemID,
      userID,
    ];
    console.log(res.locals.newItem);
    const queryTextPostInfo =
      'INSERT INTO post_info (date, location, event, donation, description, item_id, user_id, claimed) VALUES ($1, $2, $3, $4, $5, $6, $7, false) RETURNING *';
    const newPost = await db.query(queryTextPostInfo, postValues);
    res.locals.newPost = newPost.rows;
    console.log('newPost: ', res.locals.newPost);
    return next();
  } catch (err) {
    return next({
      log: 'Error in newPost: ' + err,
      status: 400,
      message: { err: 'An error occurred in new post' },
    });
  }
};

controller.getAllPosts = async (req, res, next) => {
  try {
    const queryText = `SELECT a.*, b.name, b.quantity, b.type, c.username 
                        FROM post_info as a 
                        LEFT JOIN item_info as b ON a.item_id = b.id 
                        LEFT JOIN user_info as c ON a.user_id = c.id`;

    const allPosts = await db.query(queryText);
    res.locals.allPosts = allPosts.rows;
    return next();
  } catch (err) {
    return next({
      log: 'Error in postController.getAllPosts: ' + err,
      status: 400,
      message: {
        err: 'An error occurred in getting postController.getAllPosts',
      },
    });
  }
};

controller.getPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const queryText = `SELECT FROM post_info WHERE id=${id}`;
    const selectedPost = await db.query(queryText);
    console.log('selected: ', selectedPost);
    res.locals.deletedPost = deletedPost;

    return next();
  } catch (err) {
    return next({
      log: 'Error in controller.deletePosteteUser: ' + err,
      status: 400,
      message: { err: 'Error in controller.deletePost' },
    });
  }
};

controller.deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const queryText = `DELETE FROM post_info WHERE id=${id} RETURNING *`;
    const deletedPost = await db.query(queryText);
    if (deletedPost.rowCount === 0) {
      console.log('post does not exist');
      return res.status(400).send('Post does not exist');
    }
    console.log('deleted: ', deletedPost);
    res.locals.deletedPost = deletedPost.rows[0];
    return next();
  } catch (err) {
    return next({
      log: 'Error in controller.deletePosteteUser: ' + err,
      status: 400,
      message: { err: 'Error in controller.deletePost' },
    });
  }
};

module.exports = controller;
