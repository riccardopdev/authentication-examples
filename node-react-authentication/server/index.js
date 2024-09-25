const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

//This will allow to accept json data and populate the req.body object with parameters sent with POST requests
app.use(express.json());

//Our database of users
const USERS = [];

//Get all USERS
app.get('/users', (req, res) => {
  res.json(USERS);
});

//Create new user
app.post('/users', async (req, res) => {

  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = { name: req.body.name, password: hashedPassword };

    USERS.push(user);
    res.status(201).send();

    console.log('Passowrd', req.body.password)
    console.log('Salt', salt);
    console.log('Hashed Password', hashedPassword);

  } catch (error) {
    console.log(error);

    res.status(500).send();
  }
});

//Login existing user
app.post('/users/login', async (req, res) => {
  const user = USERS.find((user) => user.name === req.body.name);

  if (user == null) {
    return res.status(400).send('Cannot find user');
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send('Success');
    } else {
      res.send('Wrong password');
    }
  } catch (error) {
    console.log(error);

    res.status(500).send();
  }
});

app.listen(3010);