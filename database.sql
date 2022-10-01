psql -d postgres://hzubtbzc:sOXX5lXtmiytbVZTdj1PA5FNNAdvg_gj@fanny.db.elephantsql.com/hzubtbzc

// testing if the SQL server is connected

const model = require('../server/model/model');
app.get('/api', async (req, res) => {
  console.log('testing if SQL server is connected');
  try {
    const results = await model.query(
      'SELECT * FROM '
    );
    res.json(results);
  } catch (err) {
    console.log(err);
  }
});