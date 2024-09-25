const bcrypt = require('bcrypt');

const SALT_ROUNDS = 12;
const user = { username: 'Riccardo' };

async function storeUserPassword(user, plainTextPassword) {
  console.log(' #1 Start request to store password.');
  try {
    const hashedPassword = await hashPassword(plainTextPassword);
    console.log(' #3 Storing the hashed password.');
    //Store the hashed password in the user object or database
    user.password = hashedPassword;
    console.log(' #4 Password securely hashed and stored.', user);
  } catch (error) {
    console.error('Error storing user password.', error);
  }
}

async function hashPassword(plainTextPassword) {
  console.log(' #2 Hashing the password.');
  try {
    const hashedPassword = await bcrypt.hash(plainTextPassword, SALT_ROUNDS);
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password.', error);
    throw new Error('Error hashing password.', error);
  }
}

async function loginUser(user, plainTextPassword) {
  console.log(' #5 Start request to login.');
  try {
    const isPasswordValid = await verifyPassword(plainTextPassword, user.password);
    if (isPasswordValid) {
      console.log(' #7 Login succesfull!');
    } else {
      console.log(' #7 Invalid password!');
    }
  } catch (error) {
    console.error('Error during login: ', error);
    throw new Error('Error during login: ', error);
  }
}

async function verifyPassword(plainTextPassword, hashedPassword) {
  console.log(' #6 Comparing provided password with stored hashed password.');
  try {
    const isMatch = await bcrypt.compare(plainTextPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    console.error('Error during verify password: ', error);
    throw new Error('Error during verify password: ', error);
  }
}

//Initiate storing password
storeUserPassword(user, 'myPassword123');

//Initiate login with password
setTimeout(() => {
  loginUser(user, 'myPassword123');
}, 2000);