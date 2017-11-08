const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PORT } = require('./config');

const server = express();

server.use(cors());

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Handle unspecified routes
server.use((req, res) =>
  res.status(404).json({
    error: `Unable to resolve ${req.originalUrl}`
  })
);

server.listen(PORT, error => {
  if (error) return console.error(error);
  console.log(`jwt-auth-todo-api running on port ${PORT}`);
  require('./database');
});
