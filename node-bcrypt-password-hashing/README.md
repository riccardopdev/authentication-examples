# Node app to hash a password using bcrypt <a name="title"></a>

A simple Node.js application that demonstrates password hashing using bcrypt. The app allows users to hash a password and later verify it by comparing the plain text password with the stored hashed version.

## Contents <a name="contents"></a>

- [Node app to hash a password using bcrypt](#title)
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

This app demonstrates how to hash passwords using `bcrypt` and subsequently verify user logins by comparing the plain text password with the hashed password. It features a simple implementation in a single `index.js` file with methods for password hashing, storing, and authentication.

## Getting Started <a name="getting-started"></a>

To install dependencies and start the node app, run the following commands:

From the root folder run:  
`npm i`

Once the dependencies are installed, start the app by running the following command from the root folder:  
`npm run app`

### Requirements <a name="requirements"></a>

- Node.js and npm installed.
- All dependencies installed

### Installation <a name="installation"></a>

From the root folder run:  
`npm i`

### Dependencies <a name="dependencies"></a>

The app uses the following dependencies:

`bcrypt`: Provides functionality for password hashing and comparison.

### Deployment <a name="deployment"></a>

This app is intended for local testing only and not for deployment.

## Project Structure <a name="the-project"></a>

### Technologies used <a name="technologies-used"></a>

This project uses NodeJS as its core technologies.

### Git management <a name="git-management"></a>

The git strategy chosen for this project is [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

### Architecture <a name="architecture"></a>

- Build tool and boilerplate: N/A

- Platform / Framework: NodeJS

- Primary Language: JavaScript

- Styling: N/A

### Testing <a name="testing"></a>

N/A

### Logging <a name="logging"></a>

N/A

### Analytics <a name="analytics"></a>

N/A

## Resources <a name="resources"></a>

[bcrypt](https://www.npmjs.com/package/bcrypt)
