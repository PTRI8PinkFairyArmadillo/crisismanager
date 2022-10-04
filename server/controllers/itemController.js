const db = require("../models/model");

const itemController = {};

itemController.newItem = async (req, res, next) => {
  try {
    console.log("in newItem");
    const { name, quantity, type } = req.body;
    const itemValues = [name, quantity, type];
    const queryTextItemInfo =
      "INSERT INTO item_info (name, quantity, type) VALUES ($1, $2, $3) RETURNING *";
    const newItem = await db.query(queryTextItemInfo, itemValues);
    res.locals.newItem = newItem.rows[0];
    console.log("newItem: ", res.locals.newItem);
    return next();
  } catch (err) {
    return next({
      log: "Error in newItemInfo: " + err,
      status: 400,
      message: { err: "An error occured in getting new item" },
    });
  }
};

module.exports = itemController;
