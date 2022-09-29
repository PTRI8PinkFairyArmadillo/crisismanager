const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../config.env') });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../client')));

// testing if the SQL server is connected
// const model = require('../server/model/model');
// app.get('/api', async (req, res) => {
//   console.log('testing if SQL server is connected');
//   try {
//     const results = await model.query(
//       'SELECT * FROM information_schema.tables'
//     );
//     res.json(results);
//   } catch (err) {
//     console.log(err);
//   }
// });

// catch-all route handler
app.use((req, res) =>
  res.status(404).send('This is not the page you are looking for...')
);

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
