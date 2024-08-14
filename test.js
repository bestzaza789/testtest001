const express = require("express");

const app = express();

// Middleware to parse JSON request bodies

app.use(express.json());

// Middleware to log request and response details

app.use((req, res, next) => {
  console.log(`Request method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  console.log(`Request body: ${JSON.stringify(req.body)}`);
  next();
});
