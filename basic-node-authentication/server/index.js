const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());

//CORS is required to allow communication between the client and server which run on two separate ports.
app.use(cors({
  origin: 'http://localhost:3010',
  credentials: true //This ensures that the cookies get passed with the request
}));
app.use(cookieParser());

//THe USERS Map fakes our users database
const USERS = new Map();
USERS.set('adminUser', { id: 1, username: 'admin', role: 'admin' });
USERS.set('standardUser', { id: 2, username: 'user', role: 'user' });

const SESSIONS = new Map();

app.post('/login', (req, res) => {
  //Using the user type passed in the body's request, retrieve the user from our database
  const user = USERS.get(req.body.userType);

  //If the user doesn't exist in our database send a 401 unauthorized response
  if (user == null) {
    res.sendStatus(401);
    return;
  }

  //If the user exists, create a unique session ID for this user
  const sessionId = crypto.randomUUID();
  SESSIONS.set(sessionId, user);

  //Store the session ID in a cookie in the user's browser
  res.cookie('sessionId', sessionId, {
    secure: true, //To implement HTTPS protocol
    httpOnly: true, //This allow access to the cookie only by HTTP requests and not JavaScript
    sameSite: 'none' //This is required as our client and server are running on two different ports
  })
    //Send a response back to the user
    .send(`Authenticated as ${req.body.userType}`)
});

app.get('/adminData', (req, res) => {
  console.log('Cookies', req.cookies);
  console.log('Sessions', SESSIONS);

  //When the user asks for admin data check if this user has a session ID stored in the cookies that matches the session ID in the SESSIONS Map in the server
  const user = SESSIONS.get(req.cookies.sessionId);

  //If we can't find a session ID for this user in our SESSIONS Map, send a 401 unauthorized response
  if (user == null) {
    res.sendStatus(401);
    return;
  }

  //If we find a session ID for this user, but their role is not an admin, send a 403 forbidden response
  if (user.role !== 'admin') {
    res.sendStatus(403);
    return;
  }

  //If we find a session ID for this user, and their role is admin, send back the admin data
  res.send('This is admin data');
});

app.listen(3005);