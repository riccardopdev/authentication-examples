# Basic NodeJS Authentication and Authorization (no password) <a name="title"></a>

An app that implements basic authentication and authorization between a client and a NodeJS server.  
This app is based on a video tutorial from the YouTube channel Web Dev Simplified (WDS).  
[Watch the Video Tutorial](https://www.youtube.com/watch?v=mL8EuL7jSbg).

## Contents <a name="contents"></a>

- [Basic NodeJS Authentication and Authorization](#title)
  - [Contents](#contents)
  - [Intro](#intro)
  - [Getting Started](#getting-started)
    - [Requirements](#requirements)
    - [Installation](#installation)
    - [Dependencies](#dependencies)
    - [Deployent](#deployment)
  - [Project Structure](#the-project)
    - [Technologies used](#technologies-used)
    - [Git management](#git-management)
    - [Architecture](#architecture)
    - [Testing](#testing)
    - [Logging](#logging)
    - [Analytics](#analytics)
  - [Resources](#resources)

## Intro <a name="intro"></a>

The purpose of this app is to test basic authentication and authorization between a client HTML page and a NodeJS server.  
The authentication and authorization are implemented without a password, based only on the type of user (admin, user, unknown).

- admin: Can be authenticated and has access to admin data.
- user: Can be authenticated but is not authorized to access admin data.
- unknown: Cannot be authenticated.

The app includes:

- A client folder with files for the HTML page to submit requests for authentication and authorization to the server.
- A server folder with files to implement the NodeJS server with POST and GET requests for authentication and authorization.

## Getting Started <a name="getting-started"></a>

To install dependencies and start the local server, run the following commands:

From the root folder run:  
`npm i`

Navigate into the client folder and run:  
`npm i`

Navigate into the server folder and run:  
`npm i`

Once the dependencies for both client and server are installed, start the app (client and server) by running the following command from the root folder:  
`npm run app`

Alternatively, you can start the client and the server separately by running the following commands from the root folder:  
`npm run client`  
`npm run server`

### Requirements <a name="requirements"></a>

- Node.js and npm installed.
- All dependencies installed

### Installation <a name="installation"></a>

From the root folder run:  
`npm i`

Navigate into the client folder and run:  
`npm i`

Navigate into the server folder and run:  
`npm i`

### Dependencies <a name="dependencies"></a>

The app uses the following dependencies:

`concurrently`: To run multiple commands concurrently.

**client**  
`http-server`: To start a server for serving the HTML page.

**server**  
`express`: To define the endpoints for the requests.  
`cors`: To enable CORS between the client and server, which use different ports.  
`cookie-parser`: To parse Cookie header.

### Deployment <a name="deployment"></a>

This app is intended for local testing only and not for deployment.

## Project Structure <a name="the-project"></a>

### Technologies used <a name="technologies-used"></a>

This project uses HTML, JavaScript and NodeJS as its core technologies.

**client**  
The client is a simple HTML page with buttons to submit requests to the server's endpoints.  
It uses JavaScript's `fetch` API to send requests and passes the user's credentials stored in a cookie as a sessionId to submit `POST` and `GET` requests to the server.

**server**  
The server is a NodeJS and express app that implements two endpoints:

- /login: Accepts `POST` requests to submit authentication.
- /adminData: Accepts `GET` requests to retrieve data for an authenticated admin user.

### Git management <a name="git-management"></a>

The git strategy chosen for this project is [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

### Architecture <a name="architecture"></a>

- Build tool and boilerplate: N/A

- Platform / Framework: NodeJS

- Primary Language: HTML and JavaScript

- Styling: N/A

### Testing <a name="testing"></a>

N/A

### Logging <a name="logging"></a>

N/A

### Analytics <a name="analytics"></a>

N/A

## Resources <a name="resources"></a>

YouTube Channel: WDS (Web Design Simplified)  
[Watch the Video Tutorial](https://www.youtube.com/watch?v=mL8EuL7jSbg)
