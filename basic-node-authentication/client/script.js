const adminBtn = document.getElementById('login-admin');
const userBtn = document.getElementById('login-user');
const unknownBtn = document.getElementById('login-unknown');
const adminDataBtn = document.getElementById('get-admin-data');
const responseDiv = document.getElementById('response');

adminBtn.addEventListener('click', () => {
  login('adminUser');
});

userBtn.addEventListener('click', () => {
  login('standardUser');
});

unknownBtn.addEventListener('click', () => {
  login('unknownUser');
});

adminDataBtn.addEventListener('click', () => {
  fetch('http://localhost:3005/adminData', {
    method: 'GET',
    credentials: 'include', //This ensures that the cookies get passed with the request
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((res) => res.text())
    .then((data) => responseDiv.textContent = data)
    .catch((error) => console.log(error));
});

const login = (userType) => {
  fetch('http://localhost:3005/login', {
    method: 'POST',
    credentials: 'include', //This ensures that the cookies get passed with the request
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userType })
  })
    .then((res) => res.text())
    .then((data) => responseDiv.textContent = data)
    .catch((error) => console.log(error));
}