const express = require('express');
const app = express();

const users = ['user1'];

app.get('/users', (req, res) => {
  res.json(users);
})

app.listen(3010);