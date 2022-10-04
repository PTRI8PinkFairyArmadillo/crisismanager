const db = require("../models/model");

const postController = {};

postController.newPost = async (req, res, next) => {
  try {
    console.log("in newPost");
    const date = new Date();
    const currentDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    const { location, event, donation } = req.body;
    //use JWT to get user_id
    //maybe create a middleware to verify the user and get user_id
    console.log(res.locals.verifiedUser);
    const userID = res.locals.verifiedUser.id;
    console.log("User id: ", res.locals.verifiedUser.id);
    const itemID = res.locals.newItem.id;
    const postValues = [currentDate, location, event, donation, itemID, userID];
    console.log(res.locals.newItem);
    const queryTextPostInfo =
      "INSERT INTO post_info (date, location, event, donation, item_id, user_id, claimed) VALUES ($1, $2, $3, $4, $5, $6, false) RETURNING *";
    const newPost = await db.query(queryTextPostInfo, postValues);
    res.locals.newPost = newPost.rows;
    console.log("newPost: ", res.locals.newPost);
    return next();
  } catch (err) {
    return next({
      log: "Error in newPost: " + err,
      status: 400,
      message: { err: "An error occured in new post" },
    });
  }
};

module.exports = postController;
