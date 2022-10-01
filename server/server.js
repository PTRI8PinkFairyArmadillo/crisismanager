const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const apiRouter = require('./routes/apiRouter');

dotenv.config({ path: path.resolve(__dirname, '../config.env') });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ask terry if we need this line
// app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/api', apiRouter);

// catch-all route handler
app.use((req, res) =>
  res.status(404).send('This is not the page you are looking for...')
);

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
