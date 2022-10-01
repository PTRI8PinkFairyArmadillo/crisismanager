const db = require('../models/model');

const postController = {};

// controller.newPost = async (req, res, next) => {
//   try {
//     const date = new Date();
//     const currentDate =
//       date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
//     const { location, event, name, quantity, type, donation } = req.body;
//     const itemValues = [name, quantity, type];
//     const postValues = [currentDate, location, event, donation];
//     //use JWT to get user_id
//         //maybe create a middleware to verify the user and get user_id
//     const queryTextItemInfo =
//       'INSERT INTO item_info (name, quantity, type) VALUES ($1, $2, $3) RETURNING *';
//     const queryTextPostInfo =
//       'INSERT INTO post_info (date, location, event, donation, claimed) VALUES ($1, $2, $3, $4, false) RETURNING *';

//     // first add item info to the database
//     const newItem = await db.query(queryTextItemInfo, itemValues);
//     const newPost = await db.query(queryTextPostInfo, postValues);
//     res.locals.newUser = newUser.rows;
//     return next();
//   } catch (err) {
//     return next({
//       log: 'Error in newPost: ' + err,
//       status: 400,
//       message: { err: 'An error occured in new post' },
//     });
//   }
// };

module.exports = postController;
