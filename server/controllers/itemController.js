const db = require('../models/model');

const controller = {};

controller.newItem = async (req, res, next) => {
  try {
    console.log('in newItem');
    const { name, quantity, type } = req.body;
    const itemValues = [name, quantity, type];
    const queryTextItemInfo =
      'INSERT INTO item_info (name, quantity, type) VALUES ($1, $2, $3) RETURNING *';
    const newItem = await db.query(queryTextItemInfo, itemValues);
    res.locals.newItem = newItem.rows[0];
    console.log('newItem: ', res.locals.newItem);
    return next();
  } catch (err) {
    return next({
      log: 'Error in newItemInfo: ' + err,
      status: 400,
      message: { err: 'An error occured in getting new item' },
    });
  }
};

controller.getAllItems = async (req, res, next) => {
  try {
    const queryText = 'SELECT * FROM item_info';
    const allItems = await db.query(queryText);
    res.locals.allItems = allItems.rows;
    return next();
  } catch (err) {
    return next({
      log: 'Error in itemController.getAllItems: ' + err,
      status: 400,
      message: {
        err: 'An error occured in getting itemController.getAllItems',
      },
    });
  }
};

controller.getItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const queryText = `SELECT * FROM item_info WHERE id=${id}`;
    const itemData = await db.query(queryText);
    if (!itemData) {
      return res.status(400).json({ message: 'Item not found' });
    }
    res.locals.itemData = itemData.rows[0];
    return next();
  } catch (err) {
    return next({
      log: 'Error in itemController.getItem: ' + err,
      status: 400,
      message: { err: 'An error occured in getting itemController.getItem' },
    });
  }
};

//delete single item without deleting post
controller.deleteItemOLD = async (req, res, next) => {
  try {
    const { id } = req.params;
    const queryText = `DELETE FROM item_info WHERE id=${id}`;
    const deletedItem = await db.query(queryText);
    if (deletedItem.rowCount === 0) {
      console.log('Item does not exist');
      return res.status(400).send('Item does not exist');
    }
    return next();
  } catch (err) {
    return next({
      log: 'Error in deleteItem: ' + err,
      status: 400,
      message: { err: 'Error in deleting item' },
    });
  }
};

//part of delete post chain, also deletes the item_info
controller.deleteItem = async (req, res, next) => {
  try {
    const id = res.locals.deletedPost.item_id;
    const queryText = `DELETE FROM item_info WHERE id=${id} RETURNING *`;
    const deletedItem = await db.query(queryText);
    if (deletedItem.rowCount === 0) {
      console.log('Item does not exist');
      return res.status(400).send('Item does not exist');
    }
    return next();
  } catch (err) {
    return next({
      log: 'Error in deleteItem: ' + err,
      status: 400,
      message: { err: 'Error in deleting item' },
    });
  }
};

controller.updateItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, quantity, type } = req.body;
    const values = [name, quantity, type];
    const queryText = `UPDATE item_info SET name=$1, quantity=$2, type=$3 WHERE id=${id}`;
    const updatedItem = await db.query(queryText, values);
    if (updatedItem.rowCount === 0) {
      return res.status(400).send('Item does not exist');
    }
    return next();
  } catch (err) {
    return next({
      log: 'Error in itemController.updateItem: ' + err,
      status: 400,
      message: { err: 'Error in updating itemController.updateItem' },
    });
  }
};

controller.deleteAllItems = async (req, res, next) => {
  try {
    const queryText = `DELETE FROM item_info RETURNING *`;
    const deletedAllItems = await db.query(queryText);
    res.locals.allItems = deletedAllItems.rows;
    return next();
  } catch (err) {
    return next({
      log: 'Error in itemController.deleteAllItems: ' + err,
      status: 400,
      message: { err: 'Error in itemController.deleteAllItems item' },
    });
  }
};

module.exports = controller;
